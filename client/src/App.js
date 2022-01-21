import './App.css';
import Header2 from './Header2';
import Posts from './Posts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from "react";
import Singlepost from './singlePost';
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Write from './Write';


function App() {
  const currentUser=true;
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>BLOGGING</title>
    <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Router>
      <div>
        <Header2/>
      </div>
      <Routes>
        <Route exact path="/" element={currentUser ?  <Posts />:<Login/>}/>
        <Route exact path="/Signup" element={ <Signup/>}/>
        <Route exact path="/login" element={ <Login />}/>
        <Route exact path="/Write" element={ <Write/>}/>
        <Route exact path="/Post" element={ <Singlepost/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
