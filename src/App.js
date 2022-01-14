import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './scren/Contacto';
import Nosotros from './scren/Nosotros';
import Inicio from './scren/Inicio';
import Parametros from './scren/Parametros';
import User from './scren/User';


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark "  >
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark"  >
            Nosotros
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active" >
            Contacto
          </NavLink>
          <NavLink to="/parametros" className="btn btn-dark" activeClassName="active" >
            Parametros
          </NavLink>
         
        </div>

        <hr />
        <Switch >
      
          <Route path="/parametros/:id" >
            <User /> 
          </Route>
          <Route path="/parametros" >
            <Parametros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/" exact >
            <Inicio />
          </Route>
        </Switch>

      </div>
    </Router>

  );

}

export default App;
