import React, {useState} from 'react';
import ProductList from './pages/ProductList';
import ProductCreationPage from './pages/ProductCreationPage';
import {BrowserRouter, Link, Switch, Redirect, Route} from 'react-router-dom';
import {StateContext} from './context';
import './App.css';

function App() {

  const [appState, setAppState] = useState([]);
    
  return (
    <StateContext.Provider value={{
      appState,
      setAppState  
    }}>
      <BrowserRouter>   
        <ul className="navbar">
          <li><Link to='/ProductCreationPage'>Product creation</Link></li>
          <li><Link to='/ProductList'>Product list</Link></li>
        </ul>
        
        <Switch>
          <Route path='/ProductCreationPage'>
            <div>
              <ProductCreationPage/>
            </div>
          </Route>
          <Route path='/ProductList'>
            <div>
              <ProductList/>
            </div>
          </Route>
          <Redirect to='/ProductCreationPage'/>
        </Switch>
      </BrowserRouter>
    </StateContext.Provider>
  )
}

export default App;
