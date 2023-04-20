import React from 'react';

const SignUp = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <form onClick={() => {}} className='signup-form'>
        <label htmlFor='name'>Enter your name</label>
        <input type='text' className='name' placeholder='Shivaji Raje' />
        <label htmlFor='email'>Enter your email</label>
        <input type='text' className='email' placeholder='abc@email.com' />
        <label htmlFor='password'>Enter your password</label>
        <input type='text' className='password' placeholder='125233qwer' />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
