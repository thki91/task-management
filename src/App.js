import React from 'react';

import Task from './components/Task';
import Icon from './components/Icons';
import AddTaskForm from './components/AddTaskForm';
import { getTasks } from './api/api';

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = React.useState(false);
  const [titleToAdd, setTitleToAdd] = React.useState('');
  const [dueDateToAdd, setDueDateToAdd] = React.useState('');

  React.useEffect(() => {
    const getAllTasks = async () => {
      const result = await getTasks();
      setTasks(result);
    };
    getAllTasks();

  }, []);


  const handleMarkAsDone = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.map((task) => {
      if (task.id === id) {
        task.done = true;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    const newTask = {
      title: titleToAdd,
      done: false,
      id: Math.floor(Math.random() * 100) + 5
    };

    if (dueDateToAdd) {
      newTask.dueDate = new Date(dueDateToAdd);
    }

    setTasks([...tasks, newTask]);
    setDueDateToAdd('');
    setTitleToAdd('');
    setShowAddTaskForm(false);
  };

  return (
    <div className="m-10">
      <div className="fixed h-screen w-2 left-0 top-0	bg-blue-400"></div>
      <header className="flex items-center mb-6">
        <Icon name="list" />
        <h1 className="text-xl font-semibold ml-3">My Tasks</h1>
      </header>
      <main>
      {tasks.map(function(task, index){
            return <Task
              key={task.id}
              title={task.title}
              id={task.id}
              dueDate={task.dueDate}
              done={task.done}
              handleMarkAsDone={handleMarkAsDone} />;
      })}
      {showAddTaskForm &&
      <AddTaskForm
        titleToAdd={titleToAdd}
        dueDateToAdd={dueDateToAdd}
        onChangeDueDate={e => setDueDateToAdd(e.target.value)}
        onChangeTitle={e => setTitleToAdd(e.target.value)}
        handleCloseTaskForm={() => setShowAddTaskForm(false)}
        handleSubmit={e => { handleSubmit(e) }} />}

        {!showAddTaskForm &&
        <div className="cursor-pointer flex items-center mt-10" onClick={() => setShowAddTaskForm(true)}>
          <Icon name="add" />
          <p className="ml-2 font-semibold">Add Task</p>
        </div>
        }
      </main>
    </div>
  );
}

export default App;
