import "./TaskFooter.scss";

const TaskFooter = props => {
  const filterClickHandler = e => {
    let filterSetting = e.target.value;
    props.sendFilterOption(filterSetting);
  };

  return (
    <div className="task-footer">
      <p className="task-footer__total-tasks">{props.count} items left</p>
      <div className="task-footer__button-group">
        <button className="task-footer__button" onClick={filterClickHandler} value="all">
          All
        </button>
        <button className="task-footer__button" onClick={filterClickHandler} value="active">
          Active
        </button>
        <button className="task-footer__button" onClick={filterClickHandler} value="complete">
          Complete
        </button>
      </div>
      <button className="task-footer__button task-footer__button--clear" onClick={filterClickHandler} value="clear">
        Clear Completed
      </button>
    </div>
  );
};

export default TaskFooter;
