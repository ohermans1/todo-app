import "./AddTask.scss";
import { useState } from "react";

const AddTask = props => {
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitMessageHandler = e => {
    setEnteredMessage(e.target.value);
  };

  const keyPressHandler = e => {
    if (e.target.code === "Enter") {
      submitHandler(e);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    if (enteredMessage !== "") {
      const taskData = {
        message: enteredMessage,
      };
      setEnteredMessage("");
      props.onSaveTaskData(taskData);
    }
  };

  return (
    <div className="add-task">
      <form onSubmit={submitHandler} onKeyPress={keyPressHandler}>
        <input type="text" className="add-task__input" placeholder="Create a new todo..." value={enteredMessage} onChange={submitMessageHandler} />
        <button type="submit" className="add-task__button">
          +
        </button>
      </form>
    </div>
  );
};

export default AddTask;
