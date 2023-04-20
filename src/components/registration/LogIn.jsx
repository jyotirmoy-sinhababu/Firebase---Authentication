import React from 'react';

import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('/sign');
  };

  return (
    <div>
      <form
        onClick={(e) => {
          handleSubmit();
        }}
        className='login-form'
      >
        <label htmlFor='email'>Enter your email</label>
        <input type='text' className='email' placeholder='abc@email.com' />
        <label htmlFor='password'>Enter your password</label>
        <input type='text' className='password' placeholder='125233qwer' />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div>
        <p>not</p>
        <NavLink to='/sign'>Signed up</NavLink>
      </div>
    </div>
  );
};

export default LogIn;
