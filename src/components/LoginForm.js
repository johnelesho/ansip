import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ClipLoader } from 'react-spinners'

import PropTypes from 'prop-types'

const notify = () => toast.error('Pls try again')
async function loginUser({email, password}) {
  return axios
    .post(`auth/login/staff`, { email, password })
    .then((res) => {
      return res.data['access_token']
    })
    .catch((err) => {
            console.log(`Some error ${{ err }}` + err)
            notify()
    })
}


const LoginForm = ({ setToken }) => {
    let [loading, setLoading] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
 
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
      const token = await loginUser({
        email,
        password,
      })
        setToken(token)
        
       
        console.log(token)
       
          setLoading(false)
    }
    return (
      <div className='LoginForm'>
        <form method="post" onSubmit={handleSubmit}>
          <h2> Login Page</h2>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            id='input'
            placeholder='Email Address'
            required='required'
          />

          <input
            type='password'
            name='password'
            id='input'
            onChange={(e) => setPassword(e.target.value)}
            required='required'
          />

          <button type='submit' onClick={handleSubmit}>
            <ClipLoader color='red' loading={loading} /> Log Me In
          </button>
        </form>
      </div>
    )
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired,
}

export default LoginForm
