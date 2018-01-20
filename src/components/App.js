import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import About from "./About";
import PhotosContainer from "./PhotosContainer";
import PhotoContainer from "./PhotoContainer";
import ScrollToTop from "./ScrollToTop";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/">
      Home
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/photos">
      Photos
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/about">
      About
    </NavLink>
  </div>
);

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />

      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/photos/:id" component={PhotoContainer} />
        <Route path="/photos" component={PhotosContainer} />
        <Route path="/about" component={About} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>

      <NavLinks />
    </ScrollToTop>
  </Router>
);

export default App;
