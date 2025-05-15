import React, { useState, useSyncExternalStore } from 'react';

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewtask] = useState({});
  const submitHandler = (e) => {
  e.preventDefault();

  const createdTask = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    assignTo,
    category,
    active: false,
    completed: false,
    failed: false,
    new: true,
  };
  setNewtask(createdTask)
  const data = JSON.parse(localStorage.getItem('employees')) || [];

  const updatedEmployees = data.map((item) => {
    if (assignTo === item.firstName) {
      // If 'tasks' array doesn't exist, initialize it
      item.tasks = item.tasks || [];
      item.tasks.push(newTask);
      console.log(item);
    }
    return item;
  });

  // Save updated data to localStorage
  localStorage.setItem('employees', JSON.stringify(updatedEmployees));

  // Clear form
  setTaskTitle('');
  setTaskDescription('');
  setTaskDate('');
  setAssignTo('');
  setCategory('');
};


  const inputClass =
    'text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4';

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        className="flex flex-wrap w-full items-start justify-between"
        onSubmit={submitHandler}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              name="taskTitle"
              placeholder="Make a UI design"
              className={inputClass}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              name="taskDate"
              className={inputClass}
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              name="assignTo"
              placeholder="Employee Name"
              className={inputClass}
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              name="category"
              placeholder="design, dev, etc"
              className={inputClass}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="description"
            placeholder="Enter task details"
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-white placeholder-grey-400"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          ></textarea>


          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-white mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
