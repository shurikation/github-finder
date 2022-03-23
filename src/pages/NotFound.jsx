import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lf">
          <h1 className="text-8xl font-bold mb-8">
            Opps!
          </h1>
          <p className="text-5xl mb-8">
            404 - Page Not Found!
          </p>
          <Link to="/Home" className='btn btn-primary btn-lg'>
            <FaHome className='mr-2'/>
            Back to HomePage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound