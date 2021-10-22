import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Projects, Resume, Info } from './components'
import reportWebVitals from './reportWebVitals'
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title={'nw portfolio'}/>
        </Route>
        <Route exact path='/projects'>
          <Projects></Projects>
        </Route>
        <Route exact path='/info'>
          <Info></Info>
        </Route>
        <Route exact path='/resume'>
          <Resume></Resume>
        </Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
