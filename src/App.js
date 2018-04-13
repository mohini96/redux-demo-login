import React, { Component } from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from './container/Login';
import Home from './container/Home';
import {connect} from 'react-redux';

class App extends Component {
  render() {
      const PublicRoute=({component:Component,...rest})=>(
          <Route {...rest} render={(routeProps)=>(!this.props.auth.user ?
              <div>public link<Component {...routeProps} /></div>: <Redirect to={'/'} />)} />
      );
      const PrivateRoute=({component:Component,...rest})=>(
          <Route {...rest} render={(routeProps)=>(this.props.auth.user ?
              <div>private link<Component {...routeProps} /></div>: <Redirect to={'/login'} />)} />
      );
      return (
      <div className="App">
        <Switch>
            <PublicRoute path={'/login'} component={Login} />
            <PrivateRoute path={'/'} component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps=state=>state;
export default connect(mapStateToProps,null)(App);
