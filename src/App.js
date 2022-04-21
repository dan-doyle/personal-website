import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import Intro from './components/Intro/Intro';
import About from'./components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CV from './components/CV/CV';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/CV'>
          <CV />
        </Route>
        <Route path="/">
        <div className="App">
          <Navbar/>
          <Leftbar/>
          <Rightbar/>
          <main>
            <Intro/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact />
          </main>
          
        </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
