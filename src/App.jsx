import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;