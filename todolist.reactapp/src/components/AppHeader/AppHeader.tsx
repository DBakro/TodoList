import "./AppHeader.css";

const AppHeader = ({ toDo, done }: { toDo: number; done: number }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo list</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
