import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./components/Home/Home"
import About from "./components/About/About"
import ClassList from "./components/ClassList/ClassList"
import Student from "./components/Student/Student"

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/classlist/:class" component={ClassList} />
    <Route path="/student/:id" component={Student} />
  </Switch>
)

// a Route generates an object || params are assigned to that object when we pass a component

// react-router-dom automatically passes down a couple handy props into the routeable components || one of them is called match || match is an object with a bunch of useful information || one of the properties on match is called params || params is where we can see the value of any route parameters
// our route parameter above is called class || therefore we can access it by using this.props.match.params.class