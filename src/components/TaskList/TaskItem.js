import "./TaskItem.scss";
import { useState } from "react";

let tempCheckedClass = "";
let tempCheckedClassButton = "";

const TaskItem = props => {
  const [complete, toggleComplete] = useState("false");
  const [checkedClass, setClass] = useState();
  const [checkedClassButton, setClassButton] = useState();

  const completeToggle = e => {
    let tempToggle = "false";
    if (complete === "false") {
      tempToggle = "true";
      tempCheckedClass = "checked";
      tempCheckedClassButton = "checked--button";
    } else if (complete === "true") {
      tempToggle = "false";
      tempCheckedClass = "";
      tempCheckedClassButton = "";
    }
    setClass(tempCheckedClass);
    setClassButton(tempCheckedClassButton);

    toggleComplete(tempToggle);
    props.sendToggleComplete(props.id, complete, checkedClass, checkedClassButton);
  };

  

  return (
    <li className="task-item">
      <input type="checkbox" className={"task-item__checkbox " + props.sendClassButton} onClick={completeToggle} />
      <div className={"task-item__text " + props.sendClass}>{props.message}</div>
    </li>
  );
};

export default TaskItem;
