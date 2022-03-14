import "./App.scss";
import Header from "./components/UI/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/Add/AddTask";
import { useState } from "react";

const PLACHOLDERARRAY = [
  { id: 1, message: "Jog around the park 3x", complete: "false", class: "", classButton: "" },
  { id: 2, message: "10 minutes meditation", complete: "false", class: "", classButton: "" },
  { id: 3, message: "Read for 1 hour", complete: "false", class: "", classButton: "" },
  { id: 4, message: "Pick up groceries", complete: "false", class: "", classButton: "" },
  { id: 5, message: "Complete Todo App on Frontend Mentor", complete: "false", class: "", classButton: "" },
];

function App() {
  const [taskList, addToTaskList] = useState(PLACHOLDERARRAY);

  const saveTaskData = enteredTaskData => {
    let tempTask = { id: taskList.length + 1, ...enteredTaskData, complete: "false", class: "", classButton: "" };
    if (enteredTaskData !== undefined) {
      addToTaskList([...taskList, tempTask]);
    }
  };

  const toggleComplete = object => {
    const tempArray = taskList.map(obj => {
      if (obj.id === object.toggleid) {
        if (object.complete === "false") return { ...obj, complete: "true", class: "checked", classButton: "checked--button" };
        else if (object.complete === "true") return { ...obj, complete: "false", class: "", classButton: "" };
      }
      return obj;
    });
    addToTaskList(tempArray);
  };

  const [filterOption, setFilterOption] = useState("all");
  const collectFilterOption = receivedFilterOption => {
    setFilterOption(receivedFilterOption);
    if (filterOption === "clear") {
      let tempNewTask = taskList.filter(tasks => {
        return tasks.complete === "false";
      });
      addToTaskList(tempNewTask);
    }
  };
  let newTaskList = taskList.filter(tasks => {
    if (filterOption === "active") {
      return tasks.complete === "false";
    } else if (filterOption === "complete") {
      return tasks.complete === "true";
    } else {
      return tasks;
    }
  });

  document.body.classList.add("theme-dark");

  return (
    <div className="App">
      <Header />
      <AddTask onSaveTaskData={saveTaskData} />
      <TaskList completeTaskList={newTaskList} toggleComplete={toggleComplete} collectFilterOption={collectFilterOption} />
    </div>
  );
}

export default App;
