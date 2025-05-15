
import { useContext, useState, useEffect } from 'react'
import './App.css'
import Login from './components/Auth/Login.jsx'
import AdminDashboard from './components/dashboard/AdminDashboard.jsx'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


function App() {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const authData = useContext(AuthContext)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse('loggedInUser')
    setUser(userData.role)
    setIsLoggedIn(userData.data)
  }
  
},[])

 
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      )
      if (employee) {
        setUser('employee')
        setIsLoggedIn(employee)
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert('Invalid credentials')
      }
    } else {
      alert('Authentication data not loaded yet.')
    }
  }
  

  
    return (
      <>
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user == 'admin' ? <AdminDashboard changeUser={setUser}  /> : ''}
        {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data = {isLoggedIn} /> : null}
      </>
    )
  }
 export default App
