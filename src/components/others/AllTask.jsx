import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between">
        <h2 className="text-lg font-medium w-1/5 text-white">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 text-white">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 text-white">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-white">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-white">Failed</h5>
      </div>

      <div className="overflow-auto">
        {authData.employees.map((elem, index) => (
          <div key={index} className="border-green-400 border mb-2 py-2 px-4 flex justify-between">
            <h2 className="text-lg font-medium w-1/5 text-white">{elem.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskCount.new}</h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCount.active}</h5>
            <h5 className="text-lg font-medium w-1/5 text-white">{elem.taskCount.completed}</h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
