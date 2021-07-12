import "./index.css"
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ForYou from "../../pages/foryou";
import Tops from "../../pages/tops";
import Genres from "../../pages/genres";
import SwipeableRoutes from "react-swipeable-routes";


 function NavBar() {
 
 
  return (
    <Router>
     
          <div className="links">
            <div className="box"><Link to="/Foryou">For you</Link></div>
            <div className="box" ><Link id="box" to="/Tops">Tops</Link></div>
            <div className="box"><Link to="/Genres">Genres</Link></div>
            </div>
        <Switch>
         <SwipeableRoutes>
            <Route path="/Foryou" component={ForYou} exact/>
            <Route path="/Tops" component={Tops}/>
            <Route path="/green" component={Genres}  />
          </SwipeableRoutes>
        </Switch>

      
    </Router>
  );
}




export default NavBar;