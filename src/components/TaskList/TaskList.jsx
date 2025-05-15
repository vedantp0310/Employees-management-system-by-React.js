import React from 'react';
import AcceptTask from './AcceptTask.jsx';
import NewTask from './NewTask.jsx';
import CompleteTask from './CompleteTask.jsx';
import FailedTask from './Failedtask.jsx';

function TaskList({ data }) {
  const tasks = data?.tasks || []; 
  console.log(tasks);
  

  return (
    <div className='h-screen'>
      <div id='tasklist' className='h-[55%] w-full flex items-center justify-start flex-nowrap py-5 gap-5 overflow-x-auto'>
        {tasks.length === 0 && (
          <p className='text-white'>No tasks assigned yet.</p>
        )}
        {tasks.map((e, idx) => {
          if (e.active) {
            return <AcceptTask key={idx} data={e} />;
          }
          if (e.new) {
            return <NewTask key={idx} data={e} />;
          }
          if (e.completed) {
            return <CompleteTask key={idx} data={e} />;
          }
          if (e.failed) {
            return <FailedTask key={idx} data={e} />;
          }
          return null; // In case none match
        })}
      </div>
    </div>
  );
}

export default TaskList;
