import React from 'react';

const LogIn = () => {
  return (
    <div>
      <form className='login-form'>
        <label htmlFor='email'>Enter your email</label>
        <input type='text' className='email' placeholder='abc@email.com' />
        <label htmlFor='password'>Enter your password</label>
        <input type='text' className='password' placeholder='125233qwer' />
      </form>
    </div>
  );
};

export default LogIn;
