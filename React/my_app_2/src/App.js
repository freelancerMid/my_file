import React from "react";
import { BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import './App.module.css';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Courses from './Courses';


const MainPage = function () {
  return ( <Router>
    <div>
    <Logo/>
    <Menu/>
    <Switch>
    <Route path = '/' exact component = {Home}/>
    <Route path = '/Contact' component = {Contact}/>
    <Route path = '/Courses' component = {Courses}/>
    <Route path = '/About' component = {About}/>
    </Switch>
    </div>
    </Router>
  )
}

const Logo = function () {
  return (
    <React.Fragment>
    <div className = 'wrapper'>
    <div className = 'container' >
    <header>
    <h1 className = "Logo text-center" > <span> SuperComputer </span></h1>
    <p className = "subTitle text-center" > Educational Institute </p>
    </header> 
    </div>
    </div>
    </React.Fragment>
  )
}

const Menu = function () {
  return ( <React.Fragment>
    <div className = 'wrapper' >
    <div className = 'container' >
    <header>
    <Nav sticky = "top"
    justify variant = "tabs"
    defaultActiveKey = "/Home" >
    <Nav.Item ><Link to = "/#" className = "link Home text-light" > home </Link> </Nav.Item>
    <Nav.Item ><Link to = "/Courses" className = "link Courses courses text-light" > courses </Link> </Nav.Item>
    <Nav.Item ><Link to = "/Contact" className = "link Contact text-light" > contact us </Link></Nav.Item>
    <Nav.Item><Link to = "/About" className = "link About text-light" > about us </Link></Nav.Item> </Nav>
    </header>
    </div>
    </div>
    </React.Fragment>
  )
}

export default MainPage;