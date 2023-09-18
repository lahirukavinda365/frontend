import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
       <div className='bg-white p-3 rounded w-25'>
         <h2>Sign-Up</h2>
         <form className='w-100'>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="inputPassword4" placeholder="Password"/>
          </div>

          <div className="form-group">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Email"/>
          </div>

          <div className="form-group">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
          </div>

          <div className='row mt-5'>
          <Link to="/login" type="submit" className="btn btn-primary col ">Login</Link>
          <button type="submit" className="btn btn-secondary col ">Sign Up</button>
          </div>  
         </form>
       </div>   

    </div>
  )
}

export default Register