import React from 'react';
import{BrowserRouter, Switch, Route} from "react-router-dom"
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/"exact component={Signup}/>
      <Route path="/Login"exact component={Login}/>
      <Route component={NotFound}/>

    </Switch>
    </BrowserRouter>
  );
};

export default App;