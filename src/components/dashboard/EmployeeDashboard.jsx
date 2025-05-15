import React, { useEffect, useState } from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList.jsx';

function EmployeeDashboard({ changeUser, data }) {
  const [employeeData, setEmployeeData] = useState(data);

  useEffect(() => {
  const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

  const rawUser = localStorage.getItem('loggedInUser');
  let loggedInUser = null;

  try {
    loggedInUser = rawUser ? JSON.parse(rawUser) : null;
  } catch (error) {
    console.error('Invalid JSON in loggedInUser:', error);
  }

  const current = storedEmployees.find(
    (emp) => emp.firstName === loggedInUser?.firstName
  );

  if (current) {
    setEmployeeData(current); // ✅ Update state with fresh employee data
  }
}, []);


  return (
    <div className='p-10 bg-[#1c1c1c] '>
      <Header data={employeeData} changeUser={changeUser} />
      <TaskListNumbers data={employeeData} />
      <TaskList data={employeeData} />
    </div>
  );
}

export default EmployeeDashboard;
