
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <ul className='Header'>
        <li>
          <Link className='Link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='Link' to='/get'>
            Get Payment Details
          </Link>
        </li>
        <li>
          <Link className='Link' to='/edit'>
            Edit Payment Details
          </Link>
        </li>
        <li>
          <Link className='Link' to='/delete'>
            Delete Payment Details
          </Link>
        </li>
        <li>
          <Link className='Link' to='/logout'>
            Log Out
          </Link>
        </li>
      </ul>
    )
}

export default Header
