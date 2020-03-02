import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar"
// import Gbook from "./components/Gbook"
// import axios from "axios";
// import { Container } from "react-bootstrap";
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Four04 from "./pages/Four04"
// import Card from"./components/Card"

function App() {
  

  return (
    <div className="App">
        <Router>
        <Navbar/>
        {/* <Card/> */}
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route exact path="/saved" component={Saved}></Route>
          {/* <Route  component={Four04}></Route> */}
        </Switch>
        </Router>
    </div>
  );
}

export default App;
