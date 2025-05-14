import type {FC} from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: FC<Props> = ({todos, onToggle, onDelete}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
