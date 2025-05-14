import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    try {
      return saved ? (JSON.parse(saved) as Todo[]) : [];
    } catch (e) {
      console.error("Ошибка парсинга localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <SearchBar onAdd={handleAdd}/>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete}/>
    </div>
  );
};

export default App;
