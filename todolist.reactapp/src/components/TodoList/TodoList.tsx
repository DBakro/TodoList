import { TodoItem } from "../../models/todo";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({
  todoItems,
  onToggleImportant,
  onToggleDone,
  onDelete,
}: {
  todoItems: TodoItem[];
  onToggleImportant: (id: number) => void;
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}) => {
  const elements = todoItems.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem
          {...item}
          onToggleImportant={() => onToggleImportant(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
