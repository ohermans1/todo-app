import "./TaskList.scss";
import TaskItem from "./TaskItem";
import TaskFooter from "./TaskFooter";

//STOP HERE AND HERE

let currentFilter = "";
let count = "";

const TaskList = props => {
  let taskList = props.completeTaskList;

  if (currentFilter !== "complete") {
    const countTaskList = taskList.filter(tasks => {
      return tasks.complete === "false";
    });
    count = countTaskList.length;
  }

  const sendToggleComplete = (id, boolean, checkedClass, checkedClassButton) => {
    const toggledObject = { toggleid: id, complete: boolean, class: checkedClass, classButton: checkedClassButton };
    props.toggleComplete(toggledObject);
  };

  const sendFilterOption = filterOption => {
    currentFilter = filterOption;
    props.collectFilterOption(filterOption);
  };

 

  return (
    <div className="task-list">
      <ul className="task-list">
        {taskList.map(task => (
          <TaskItem key={task.id} message={task.message} id={task.id} sendClass={task.class} sendClassButton={task.classButton} sendToggleComplete={sendToggleComplete} />
        ))}
      </ul>
      <TaskFooter sendFilterOption={sendFilterOption} count={count} />
    </div>
  );
};

export default TaskList;
