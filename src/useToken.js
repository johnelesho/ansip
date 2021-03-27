import { useState } from 'react'

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token')
    return tokenString
        //   JSON.parse(tokenString)
    //   console.log(userToken);
    // return userToken
  }

  const [token, setToken] = useState(getToken())

  const saveToken = (userToken) => {
      localStorage.setItem('token', useToken)
        //   JSON.stringify(userToken))
    setToken(userToken)
  }

  return {
    setToken: saveToken,
    token,
  }
}
