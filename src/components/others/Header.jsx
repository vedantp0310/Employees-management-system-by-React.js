import React from 'react'

function Header({ changeUser, data }) {
  const userName = data?.firstName || 'Admin';

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  return (
    <div>
      <div className='flex justify-between items-end text-center'>
        <h1 className='text-2xl font-medium'>
          Hi <br />
          <span className='text-2xl font-medium '>{userName} 👋</span>
        </h1>
        <button
          onClick={logOutUser}
          className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
