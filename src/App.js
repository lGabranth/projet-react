import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import PostsList from "./views/Posts/PostsList";
import PostAdd from "./views/Posts/PostAdd";
import PostDetails from "./views/Posts/PostDetails";
import PostUpdate from "./views/Posts/PostUpdate";
import UsersList from "./views/Users/UsersList";
import UserAdd from "./views/Users/UserAdd";
import UserDetails from "./views/Users/UserDetails";
import UserUpdate from "./views/Users/UserUpdate";

export default class App extends Component {
  render() {
    return <BrowserRouter>
      {/*HEADER*/}
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={PostsList} />
        <Route exact path="/articles/ajouter" component={PostAdd} />
        <Route exact path="/articles/:id" component={PostDetails} />
        <Route exact path="/articles/:id/modifier" component={PostUpdate} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/users/ajouter" component={UserAdd} />
        <Route exact path="/users/:id" component={UserDetails} />
        <Route exact path="/users/:id/modifier" component={UserUpdate} />
      </Switch>
    </BrowserRouter>
  }
}