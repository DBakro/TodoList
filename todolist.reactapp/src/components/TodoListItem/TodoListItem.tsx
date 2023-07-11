import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoItem } from "../../models/todo";
import "./TodoListItem.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

type TodoItemProps = TodoItem & {
  onDelete: () => void;
  onToggleImportant: () => void;
  onToggleDone: () => void;
};

const TodoListItem = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleDone,
  important,
  done,
}: TodoItemProps) => {
  let classNames = "todo-list-item";
  if (important) {
    classNames += " important";
  }

  if (done) {
    classNames += " done";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={onDelete}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={onToggleImportant}
      >
        <FontAwesomeIcon icon={faExclamation} />
      </button>
    </span>
  );
};

export default TodoListItem;
