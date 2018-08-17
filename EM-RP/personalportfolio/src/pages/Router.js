import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import Home from "./Home"
import Work from "./Work"
import Contact from "../Components/Contact"


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
