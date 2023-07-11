import { FormEvent, useState } from "react";
import "./AddTodoItem.css";

const AddTodoItem = ({
  onTodoAdded,
}: {
  onTodoAdded: (text: string) => void;
}) => {
  const [label, setLabel] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (label) {
      onTodoAdded(label);
      setLabel("");
    }
  };

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setLabel(e.target.value)}
        placeholder="What need to be done"
        value={label}
      />
      <button className="btn btn-primary add-todo-item col-2">Add Task</button>
    </form>
  );
};

export default AddTodoItem;
