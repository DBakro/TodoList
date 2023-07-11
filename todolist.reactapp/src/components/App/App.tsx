import { useState } from "react";
import { TodoItem } from "../../models/todo";
import AddTodoItem from "../AddTodoItem/AddTodoItem";
import AppHeader from "../AppHeader/AppHeader";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import "../SearchPanel/SearchPanel.css";
import TodoList from "../TodoList/TodoList";

type AppProps = {
  todoData: TodoItem[];
  term: string;
  filterType: string;
};

const App = () => {
  let maxId = 1;

  const createTodoItem = (label: string) => {
    return { id: maxId++, label: label, done: false };
  };

  const [todoState, setTodoState] = useState<AppProps>({
    todoData: [
      createTodoItem("Drink Coffee"),
      createTodoItem("Make Awesome App"),
      createTodoItem("Have a lunch"),
    ],
    term: "",
    filterType: "all",
  });

  const { todoData, term, filterType } = todoState;

  const updateState = (propName: string, propValue: string | TodoItem[]) => {
    setTodoState({ ...todoState, [propName]: propValue });
  };

  const addTodoItem = (text: string) => {
    updateState("todoData", [...todoData, createTodoItem(text)]);
  };

  const onSearchFilter = (term: string) => {
    updateState("term", term);
  };

  const onChangeFilter = (filterType: string) => {
    updateState("filterType", filterType);
  };

  const search = (items: TodoItem[], term: string) => {
    if (term.trim().length === 0 && filterType === "all") {
      return items;
    }

    return items.filter(
      (i) => i.label.toLowerCase().indexOf(term.trim().toLowerCase()) >= 0
    );
  };

  const filter = (items: TodoItem[], filterType: string) => {
    if (filterType === "all") {
      return items;
    }

    let isDoneType = filterType === "done";
    return items.filter((i) => i.done === isDoneType);
  };

  const toggleProperty = (arr: TodoItem[], id: number, propName: string) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldTodoItem = todoData[idx];
    const newTodoItem: TodoItem = {
      ...oldTodoItem,
      [propName]: !oldTodoItem[propName as keyof TodoItem],
    };

    updateState("todoData", [
      ...todoData.slice(0, idx),
      newTodoItem,
      ...todoData.slice(idx + 1),
    ]);
  };

  const onToggleImportant = (id: number) =>
    toggleProperty(todoData, id, "important");

  const onToggleDone = (id: number) => toggleProperty(todoData, id, "done");

  const deleteItem = (id: number) => {
    const idx = todoData.findIndex((el) => el.id === id);
    updateState("todoData", [
      ...todoData.slice(0, idx),
      ...todoData.slice(idx + 1),
    ]);
  };

  const filteredItems = filter(search(todoData, term), filterType);

  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="container-lg col-lg-4">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="btn-toolbar search-panel row">
        <SearchPanel onSearchFilter={onSearchFilter} />
        <ItemStatusFilter
          filterType={filterType}
          onChangeFilter={onChangeFilter}
        />
      </div>
      <TodoList
        todoItems={filteredItems}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
        onDelete={deleteItem}
      />
      <AddTodoItem onTodoAdded={addTodoItem} />
    </div>
  );
};

export default App;
