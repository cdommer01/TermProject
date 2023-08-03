import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Text from './pages/Text'
import About from './pages/About'
import NotFound from './pages/NotFound'
import APIs from './pages/API';
import colors from './pages/Color';
import Images from './pages/Image';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Text} />
          <Route exact path='/About' component={About} />
          <Route exact path = '/API' component={APIs} />
          <Route exact path = '/Color' component={colors}/>
          <Route exact path = '/Image' component={Images}/>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
  );

}
export default App;
