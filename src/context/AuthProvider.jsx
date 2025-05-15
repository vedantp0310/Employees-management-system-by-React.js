import React, { useState, useEffect, createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
import { setLocalStorage } from '../utils/LocalStorage';



// Create the context
export const AuthContext = createContext()

function AuthProvider({ children }) {
  // localStorage.clear()
  const [userdata, setUserData] = useState(null)

  useEffect(() => {
    const localEmployees = localStorage.getItem('employees');
    if (!localEmployees) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  
  

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
