import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { auth } from '../../firebaseConfig/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    navigate('/sign');
  };

  return (
    <div>
      <form
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className='login-form'
      >
        <label htmlFor='email'>Enter your email</label>
        <input
          name='email'
          type='text'
          className='email'
          placeholder='abc@email.com'
        />
        <label htmlFor='password'>Enter your password</label>
        <input
          name='password'
          type='text'
          className='password'
          placeholder='125233qwer'
        />
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
