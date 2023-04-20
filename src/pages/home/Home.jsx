import React from 'react';

import { Outlet } from 'react-router-dom';

import './homeStyle.css';

const Home = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Home;
