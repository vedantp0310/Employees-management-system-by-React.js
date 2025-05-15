import React from 'react'

function TaskListNumbers({data}) {
    
  return (
    <div>
        <div className='flex mt-10 justify-between gap-5 screen text-left '>
            <div className='w-[40%] p-10 rounded-xl py-6 px-9 bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[40%] p-10 rounded-xl py-6 px-9 bg-blue-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='w-[40%] p-10 rounded-xl py-6 px-9 bg-green-400'>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
                <h2 className='text-3xl  font-semibold'>{data.taskCount.active}</h2>
            </div>
            <div className='w-[40%] p-10 rounded-xl py-6 px-9 bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskListNumbers