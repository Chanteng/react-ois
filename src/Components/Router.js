import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About"
// import Login from "../Pages/Login";

function Router(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} /> */}
    </BrowserRouter>
  );
}

export default Router;