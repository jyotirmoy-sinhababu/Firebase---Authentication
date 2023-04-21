import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { auth } from '../../firebaseConfig/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
  // all the states & hooks
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const [logInEr, setLogInEr] = useState({
    emailEr: '',
    passwordEr: '',
  });

  //observe the change in input field.

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const { email, password } = inputData;

  //  form submission

  const handleSubmit = (e) => {
    if (!email) {
      setLogInEr({ ...logInEr, emailEr: 'please, provide your email' });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setLogInEr({ ...logInEr, emailEr: 'wrong format' });
    } else if (!password) {
      setLogInEr({
        ...logInEr,
        passwordEr: 'Please enter your password',
      });
    } else if (!/^(?=.*[0-9])(?=.*[a-z]).{8,32}$/.test(password)) {
      setLogInEr({
        ...logInEr,
        passwordEr:
          'password should be 8 character long with number and lowercase letters',
      });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      navigate('/dash');
    }
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
          onChange={handleChange}
          name='email'
          type='text'
          className='email'
          placeholder='abc@email.com'
        />
        <label htmlFor='password'>Enter your password</label>
        <input
          onChange={handleChange}
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
