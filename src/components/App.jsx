import "../styles/App.css";
import { AddTask } from "./AddTaskBtn";
import { LoadTasks } from "./LoadTasks";
export function App({ tasks }) {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask />
      {tasks.length > 0 ? (
        <LoadTasks tasks={tasks} />
      ) : (
        <p>You don't have any task.</p>
      )}
    </div>
  );
}
