import React from 'react';
import "./add-task-form.css";
import Button from "../Button";
import Icon from "../Icons";

const AddTaskForm = ({titleToAdd, dueDateToAdd, handleSubmit, onChangeTitle, onChangeDueDate, handleCloseTaskForm}) => {
  return (
    <form className="add-task-form bg-gray-50 p-3 mb-5 flex items-center rounded" onSubmit={e => { handleSubmit(e) }}>
      <label htmlFor="title" className="text-sm add-task-form-label">
        Title *
        <input type="text" name="title"
               value={titleToAdd}
               className="ml-2 rounded p-2 outline-none hover:shadow add-task-form-input"
               onChange={onChangeTitle}
               required />
      </label>
      <label htmlFor="dueDate" className="ml-5 text-sm add-task-form-label">
        Due Date
        <input type="date" name="dueDate"
               value={dueDateToAdd}
               className="ml-2 rounded p-2 ml-2 outline-none hover:shadow add-task-form-input"
               onChange={onChangeDueDate} />
      </label>
      <div className="ml-auto flex items-center text-blue-600" >
        <Button name="Submit" />
        <div className="ml-3 cursor-pointer" onClick={handleCloseTaskForm}>
           <Icon name="remove" />
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;