import React from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebaseConfig/FirebaseConfig';
import { signOut } from 'firebase/auth';

const DashBoard = () => {
  const navigate = useNavigate();

  //handle logout
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('logout successful');
        navigate('/log');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={handleSignOut}>Logout</button>
      </div>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default DashBoard;
