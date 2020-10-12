import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NewsPage from "./NewsPage";
import VideoPage from "./VideoPage";
import HomePage from "./HomePage";
import StockPage from "./StockPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Daily Read</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/news" >News</Nav.Link>
              <Nav.Link as={Link} to="/video" >Video</Nav.Link>
              <Nav.Link as={Link} to="/stock" >Stock</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </nav>
          
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/video">
              <VideoPage />
            </Route>
            <Route path="/stock">
              <StockPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
