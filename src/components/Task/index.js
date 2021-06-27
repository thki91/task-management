import React from "react";
import "./task.css";
import Icon from "../Icons";
import Button from "../Button";

const Task = ({id, title, dueDate, done, handleMarkAsDone}) => {
  const isOverdue = () => {
    if (!dueDate) return false;
    return new Date().setHours(0, 0, 0, 0) >= dueDate.setHours(0, 0, 0, 0);
  };

  const doneBadge = (
    <div className="bg-green-400 text-white	p-2 text-xs rounded-lg font-semibold flex items-center">
      <Icon name="checkmark" sizeClasses="h-4 w-4" />
      <p className="ml-1 text-white text-xs font-semibold uppercase">Done</p>
    </div>
  );

  const markAsDoneButton = () => {
    const buttonProps = {
      name: 'Mark as Done',
      id: id,
      handleClick: handleMarkAsDone,
    };
    if (isOverdue()) {
      buttonProps.tooltipText = 'This task cannot be marked as done since it is overdue.';
      buttonProps.disabled = true;
    }

    return <Button {...buttonProps} />;
  };

  const dueDateDisplay = () => {
    if (!dueDate) return;
    return (
      <p className={`${isOverdue() ? "text-xs text-red-600" : "text-xs text-gray-400"}`}>
        Due on: {dueDate.toDateString()}
      </p>
    );
  };
  return (
    <div className="task bg-gray-50 p-3 mb-5 flex items-center justify-between rounded-sm">
      <div>
        <p>{title}</p>
        {dueDateDisplay()}
      </div>
      {done && doneBadge}
      {!done && markAsDoneButton()}
    </div>
  );
};

export default Task;
