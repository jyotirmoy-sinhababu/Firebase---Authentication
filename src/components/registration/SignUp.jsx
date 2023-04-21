import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebaseConfig/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  // all the states & hooks.
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [signUpError, setSignUpError] = useState({
    nameEr: '',
    passwordEr: '',
    emailEr: '',
  });

  //observe the change in input field.

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const { email, password, name } = signUpData;

  //  form submission

  const handleSubmit = () => {
    if (!name) {
      setSignUpError({ ...signUpError, nameEr: 'Please enter your name' });
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      setSignUpError({ ...signUpError, nameEr: 'wrong format, letters only' });
    } else if (!email) {
      setSignUpError({ ...signUpError, emailEr: 'Please enter your email' });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setSignUpError({ ...signUpError, emailEr: 'wrong format' });
    } else if (!password) {
      setSignUpError({
        ...signUpError,
        passwordEr: 'Please enter your password',
      });
    } else if (!/^(?=.*[0-9])(?=.*[a-z]).{8,32}$/.test(password)) {
      setSignUpError({
        ...signUpError,
        passwordEr:
          'password should be 8 character long with number and lowercase letters',
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
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
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className='signup-form'
      >
        <label htmlFor='name'>Enter your name</label>
        <input
          onChange={handleChange}
          type='text'
          name='name'
          className='name'
          placeholder='Shivaji Raje'
        />
        <label htmlFor='email'>Enter your email</label>
        <input
          onChange={handleChange}
          type='text'
          name='email'
          className='email'
          placeholder='abc@email.com'
        />
        <label htmlFor='password'>Enter your password</label>
        <input
          onChange={handleChange}
          type='text '
          name='password'
          className='password'
          placeholder='125233qwer'
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
