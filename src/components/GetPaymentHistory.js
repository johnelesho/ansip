import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css'
// import useToken from '../useToken'

 

const GetPaymentHistory = () => {
  // const { token, setToken } = useToken()
  const [id, setId] = useState()
  let [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const notify = (msg) => toast.error(`${msg}  Pls try again`)

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzI5YjhlYTczYjQyOWNhZGRkNzFhNTg5N2EwNDY4MzYzYWRjY2U4Y2Q0NWY4N2M2ZjI2ZGM3ODVmMTUxMzdlNTZmNjJlMzI5ZmYyNjFlY2EiLCJpYXQiOjE2MTY4NTAxNDMsIm5iZiI6MTYxNjg1MDE0MywiZXhwIjoxNjE2OTM2NTQzLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.sy_7Ar_i4BDr7us66aUzm1aX62mPZXBNdE67UhyEVFo1EML11gyaR1XtsX1_b4JTTme5xBQiTNrGMDx-tjhG0JKPqlTbFux90VS69kPLMc6wuSq9SYIlPRDRVTZBLBBZmhqSLSqnEFnaQ6nk9jx3_G3YBTDrkWftDGNq6-Lh6dkuKn7TaSYmbXtaWQv7Btz74Xwm9tbZEbWj8iYZP25nnuTm8MTJ2Q9fqdC1qyE6Mai9hSsmspJEIHo5byTrydDSiKo7YRHXdyxWXH7WcgOyi3cfnWKakG9isEv2WmTrPOe-9v9hr0k4f0c-onfsbyITWrRhX9uCnYsw56KCd2oV-lV3R0COHGbaDK3rg4PzO4W-x8b1N0VwHgfrCC0kRBVaGf7QVfj_3M_GZpJQEi7TZz2A3E60gP4arTN39b6MevMDOGcF3LZVQq25MqanqN_VpTNQ3-cToLjMZ5mckH_DdDQ4L6Rm1jk8APGzIUuGu7xrbtHoy2ir0qy_cEL0TwWuXDkpteUhMx1y9i7UVRO8QXZyFy8SQ10AJbSoQ4STPB9d402MvM-Uq_bK530y4KamqNg2pdDhPXCKAxJaRHThVKgJXQM2i66sigl7cJcnckWZ53JyKFMxNVUj3YaXVN8ml1obq4YvymPYzOjwXPI85DhNnvfvg04yV4rZE_8cDzg`
        return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
 
  const handleGetPaymentDetails = (e) => {
    e.preventDefault()
    setLoading(true)
 
    return axios
      .get(`payment_histories`, { id:id })
      .then((res) => {
        // console.log(res.data.data.data)
        const entries = Object.values(res.data.data.data)
        setData(entries)
        console.log(entries);
      })
      .catch((err) => {
        notify(err.message)
        // 2041926724
      })
      .finally(() => {
        setLoading(false)
      })
  }

  // const displayData = {
  //   if(data) {
     
  //   }
  // }
  return (
    <div className='App'>
      <form method='get' onSubmit={handleGetPaymentDetails}>
        <h2> Get Payment History</h2>
        <input
          type='text'
          name='id'
          id='input'
          onChange={(e) => setId(e.target.value)}
          placeholder='Anssid No'
          required='required'
        />

        <button onClick={handleGetPaymentDetails} type='submit'>
          <ClipLoader color='red' loading={loading} /> Get Payment Details
        </button>
      </form>
      {data ? (
        <table>
          <thead>
            {data.map((row, i) => {
            return Object.keys(row).map((td) => <th key={i}>{td}</th>)
            })}
          </thead>
          <tbody>
              <tr>
            {data.map((row, id) => {
              return Object.entries(row).map((td) => <td key={id}>{td[1]}</td>)
            })}
          </tr>
          </tbody>
        
        </table>
      ) : ""}
    </div>
  )
}

export default GetPaymentHistory
