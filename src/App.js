import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import LogIn from './components/registration/LogIn';
import SignUp from './components/registration/SignUp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<LogIn />} />
          <Route path='/log' element={<LogIn />} />
          <Route path='/sign' element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
