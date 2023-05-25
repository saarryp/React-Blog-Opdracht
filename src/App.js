 import React, {useState} from 'react';
 import './App.css';
 import Navigation from "./components/navigation/Navigation";
 import {Routes, Route, Navigate} from 'react-router-dom';
 import Home from './pages/home/Home';
 import LogIn from './pages/login/LogIn';
 import BlogOverzicht from './pages/blogoverzicht/BlogOverzicht';
 import BlogPost from './pages/blogpost/BlogPost';

function App() {
   const [isAuthenticated, toggleIsAuthenticated] = useState(false);



  return (
      <>
          <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LogIn toggleAuth={toggleIsAuthenticated}/>}/>
            <Route path="/blogposts" element={isAuthenticated ? <BlogOverzicht/> : <Navigate to='/login'/>}/>
            <Route path="/blogposts/:blogId" element={isAuthenticated ? <BlogPost/> : <Navigate to='/login'/>}/>
        </Routes>

      </>
  );
}

export default App;