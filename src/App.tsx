import {type FC, useState} from "react";
import SearchBar from "./components/SearchBar.tsx";
import TodoList from "./components/TodoList.tsx";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };


  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <SearchBar onAdd={handleAdd}/>
      <TodoList
        todos={todos}
        onToggle={(id) =>
          setTodos((prev) =>
            prev.map((todo) =>
              todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
          )
        }
        onDelete={(id) => setTodos((prev) => prev.filter((todo) => todo.id !== id))}
      />
    </div>
  );
};

export default App;
