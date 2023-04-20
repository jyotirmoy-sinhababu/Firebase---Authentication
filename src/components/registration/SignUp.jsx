import React from 'react';

const SignUp = () => {
  return (
    <div>
      <form className='signup-form'>
        <label for='name'>Enter your name</label>
        <input type='text' className='name' placeholder='Shivaji Raje' />
        <label for='email'>Enter your email</label>
        <input type='text' className='email' placeholder='abc@email.com' />
        <label for='password'>Enter your password</label>
        <input type='text' className='password' placeholder='125233qwer' />
      </form>
    </div>
  );
};

export default SignUp;
