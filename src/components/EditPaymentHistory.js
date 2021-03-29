import { useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'
// import { ClipLoader } from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css'

// import useToken from '../useToken'

const EditPaymentHistory = () => {

  // let [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [editData, setEditData] = useState({})
  let { id } = useParams()

  
  const notify = (msg) => toast.error(`${msg}  Pls try again`)

  const handleEditPaymentDetails = (e) => {
    e.preventDefault()
    // setLoading(true)

    return axios
      .post(`payment_histories`, editData)
      .then((res) => {
        console.log(res.data.data)
        //   console.log(res);
        const entries = Object.values(res.data.data.data)
        setData(entries)
        console.log(entries)
      })
      .catch((err) => {
        notify(err.message)
        // 2041926724
      })
      .finally(() => {
        // setLoading(false)/
      })
  }

 
  return (
    <div className='App'>
      <p>Topic: {id}</p>
      {data ? (
        <table>
          <thead>
            <tr>
              {data.map((row) => {
                return Object.keys(row).map((td, i) => <th key={i}>{td}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.map((row) => {
                return Object.entries(row).map((td, i) => (
                  <td key={i}>
                    <input
                      key={'th' + i}
                      type='text'
                      name={td[0]}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={td[1]}
                    />
                  </td>
                ))
              })}
              <td>
                {' '}
                <button onClick={handleEditPaymentDetails} type='submit'>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={handleEditPaymentDetails} type='submit'>
                  Delete Payment Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        ''
      )}
    </div>
  )
}

export default EditPaymentHistory
