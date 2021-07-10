import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" component={Home} exact>
            <Home />

          </Route>
          <Route path="/about" component={About} exact>
            <About/>
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact/>
          </Route>
          <Route path="/signup" component={Signup} exact>
            <Signup/>
          </Route>
        </Switch> 
      </Router>
      </div>
        <Footer/>
    </div>
    
    );
};

export default App;
