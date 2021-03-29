import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
// import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import EditPaymentHistory from './components/EditPaymentHistory'
import GetPaymentHistory from './components/GetPaymentHistory'
// import Logout from './components/Logout'

import DeletePaymentHistory from './components/DeletePaymentHistory'
import { ToastContainer } from 'react-toastify'
import useToken from './useToken'


import './App.css'


function App() {
  const { token, setToken } = useToken()

  const handleLogout = (e) => {
       
    if (token) {
      
      localStorage.removeItem('token')
      // history.p
          // this.props.history.push('/')
       window.location.reload()
    }
    // return (
    //      <Redirect to="/" />
    //    )
    
   
    //  return      <div className='App'>
    //     <Logout />
    //   </div>
  }

  if (!token || token === undefined) {
    return (
      <div className='App'>
        <LoginForm setToken={ setToken } />
      </div>

    )
  }

  return (
    <div className='App'>
      <Router>
        <Header handleLogout={handleLogout} />
        <Switch>
          {/* <Route exact path='/' component={Dashboard} /> */}
          <Route exact path='/' component={GetPaymentHistory} />

          {/* <Route path='/get' component={GetPaymentHistory} /> */}
          {/* <Route path='/login' component={LoginForm} /> */}
          {/* <Route path='/logout' component={Logout} />  */}
          {/* <Route path='/logout'>
            <Logout handleLogout={handleLogout} />
          </Route> */}
          {/* <Route
            path='/logout'
            component={<Logout handleLogout={handleLogout} />}
          /> */}
          <Route path='/edit/:id' component={EditPaymentHistory} />
          <Route path='/delete/:id' component={DeletePaymentHistory} />

          {/* <LoginForm /> */}
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App

