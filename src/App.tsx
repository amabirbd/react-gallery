import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignIn from './components/signin/SignIn';
import Test from './components/Test';
import SignUp from './components/signup/SignUp'

function App() {

  const [lat, setLat] = useState<number>()
  const [lng, setLng] = useState<number>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {

      setLat(position.coords.latitude)
      setLng(position.coords.longitude)

      console.log("Position: ", position);
    });
  
  }, [])
  
  return (
    <div className="App">
      <div className='flex justify-between bg-orange-500 '>
        <div className='flex flex-col'>
          <div className=' text-xl px-5 py-2'>Latitude: {lat}</div>
          <div className=' text-xl px-5 py-2'>Longitude: {lng}</div>
        </div>

          <nav className='nav flex  p-5 '>
            <ul className='nav-list flex pr-5'>
              <li className='text-xl p-3 hover:text-white transition ease-in-out'>
                <Link to="/">Home</Link>
              </li>
              <li className='text-xl p-3 hover:text-white transition ease-in-out'>
                <Link to="/test">Test</Link>
              </li>
              <li className='text-xl p-3 hover:text-white transition ease-in-out'>
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li className='text-xl p-3 hover:text-white transition ease-in-out'>
                <Link to="/sign-in">Sign In</Link>
              </li>
            </ul>
        </nav>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

      </Routes>
    </div>
  );
}

export default App;
