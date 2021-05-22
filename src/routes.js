import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from "./pages/Login";

export default function Routes(){
  return(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />

      {/* <Route path="/singup" component={} />  */}
    </Switch>
  </BrowserRouter>
  );
}
