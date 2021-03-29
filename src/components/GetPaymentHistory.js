import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css'
import setAuthorizationToken from '../setAuthorizationToken'
// import ReactTable from 'react-table'
// import 'react-table/react-table.css'
import { Link } from 'react-router-dom'
// import useToken from '../useToken'

 

const GetPaymentHistory = () => {
  // const { token } = useToken()
  const [id, setId] = useState()
  let [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  // const [columns, setColumns] = useState()
  const notify = (msg) => toast.error(`${msg}  Pls try again`)

  // axios.interceptors.request.use(
  //   (config) => {
  //     config.headers.authorization = `Bearer ${token}`
  //     /*eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYjQzZmE3MGI5NzRmYmNhNmU3ZDU3MTMzMWY4ZDdiZDBjYTRlOGJjOTU0Y2NmYTU1YzlmNDIyZjA5OWFhMDYwYWVjY2U2ZWM2NWQ4YjcwM2MiLCJpYXQiOjE2MTY5NDQ2MTEsIm5iZiI6MTYxNjk0NDYxMSwiZXhwIjoxNjE3MDMxMDExLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.pbvC1Duv080ZGkcMGoffz65Xjv7khVJ0wodqyOWegHahGBlQ19JFSe7xn-G5Y0UqSzpfgQHoqamZ8qqwwePFij1mgvoJhKYzCqqEKHXxuUDYn8wl_hF52d0swmPqE61s2fWDUYweYiuDTlQqQVW20Y-1-pA8BHW3cxvjAiQYUcmppi17x_1oGuwxdcumFtsQJiId7ThH6NWp6AKHRH8u-rv6GKQjXwSiy0uFhmZ6KzU4oojztA-DslZmAGOHbMAsRtB4SJby1PsYAF0SJLEwFOnTaLQbWfkbMRxXOXkQ0NPzzg1k4WhNifDT7qmhYVbL4LlyouWA_qGZoasYKeSFlhZNZXBNc9btHSgAPTJ6RVu8CKhEI2ibM4BWyY_mm-_GmX-CyrMQdWlGZQOrgponVteHRw2n1CJA6ab1qj3E083nTisVVjjiYImCptmTYImYSK0JE6soXJNa4FMWHqLjR3twEixOHOU1L4X0AizKIjG3ZMQn0K2W2hxjoNC5MvUuwi3T1mFIV1Ysd-npeBmDI_H5IMLpuj387uqcUEV2MBRZ46XD6WlZqPXCjACTZbjoGCJFiQHjkARQbpGbvRprgvpGVVSJwGhvUlji5p4zKnVyJc3bVdI_pjRLiJkucB9i40Xg1cigUYgvxCE96WguA7yEP-L_sX-ztN9fXlx0cZw`*/
  //       return config
  //   },
  //   (error) => {
  //     return Promise.reject(error)
  //   }
  // )

  
 
  const handleGetPaymentDetails = (e) => {
    e.preventDefault()
    setLoading(true)
    setAuthorizationToken(localStorage.token)
    return axios
      .get(`payment_histories`, { id:id })
      .then((res) => {
        const results = res.data['data']['data']
        // console.log(results[0]);
        // const head = Object.keys(results[0])
        const entries = Object.values(results)
        // console.log(entries);
        setData(entries)
        // const columns = []

         
        // head.forEach(h => {
        //   columns.push({
        //     [h] : h
        //   })
        // })
        // console.log(columns);
        // setColumns(columns)
        // const header = (entries) => {
        //   entries.map((entry, i)=> {
        //       // console.log(entry);
        //   });
        // }
        // header(head)
        // console.log(entries);
      })
      .catch((err) => {
        notify(err.message)
        // 2041926724
      })
      .finally(() => {
        setLoading(false)
      })
  }

 const renderTableHeader = () => {
   let header = Object.keys(data[0])
   return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
   })
 }

 const renderTableData = () => {
   return data.map((data, index) => {
     const {
       id, cust_Reference, is_Reversal, amount, payment_reference, payment_date, payment_method, customer_name, bank_name, is_credited, payment_log_id, deposit_slip_number, amount_applied, isAllocated, created_at, updated_at, deleted_at
     } = data //destructuring
     return (
       <tr key={id}>
         <td>{id}</td>
         <td>{cust_Reference}</td>
         <td>{is_Reversal}</td>
         <td>{amount}</td>
         <td>{payment_reference}</td>
         <td>{payment_date}</td>
         <td>{payment_method}</td>
         <td>{customer_name}</td>
         <td>{bank_name}</td>
         <td>{is_credited}</td>
         <td>{payment_log_id}</td>
         <td>{deposit_slip_number}</td>
         <td>{customer_name}</td>
         <td>{amount_applied}</td>
         <td>{isAllocated}</td>
         <td>{created_at}</td>
         <td>{updated_at} </td>
         <td> {deleted_at}</td>

         <td>
           {' '}
           <Link to={`/edit/${ id }`} type='submit'>
             edit
           </Link>
         </td>
         <td>
           <Link to={`/delete/${id }`} type='submit'>
             Delete
           </Link>
         </td>
       </tr>
     )
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
        <table id='students'>
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderTableData()}
          </tbody>
        </table>
      ) : (
        ''
      )}
    </div>
  )
}
{/* <ReactTable data={data} columns={columns} /> */}
export default GetPaymentHistory
