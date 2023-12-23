import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className='background'>
    <nav className="navbar">
      <div className="container">
        <div className="brand"><img src='https://bizbeepro.frappe.cloud/files/BizbeePRO2-removebg-preview.png' alt='my school'height={25}/></div>
        <div className="nav-links">
        
          {/* Add your navigation links here */}
        </div>
        <div className="login-button">
        <Link to="/login">Login</Link>
        </div>
      </div>
     
    </nav>
    </div>
  );
};

export default Navbar;
