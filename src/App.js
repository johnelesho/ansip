import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import EditPaymentHistory from './components/EditPaymentHistory'
import GetPaymentHistory from './components/GetPaymentHistory'
import DeletePaymentHistory from './components/DeletePaymentHistory'
import { ToastContainer } from 'react-toastify'
import useToken from './useToken'


import './App.css'


function App() {
  const { token, setToken } = useToken()

  if (!token) {
    return (
      <div className='App'>
        <LoginForm setToken={setToken} />
      </div>
    )
  }

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/get' component={GetPaymentHistory} />
          <Route path='/edit' component={EditPaymentHistory} />
          <Route path='/delete' component={DeletePaymentHistory} />

          {/* <LoginForm /> */}
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App

