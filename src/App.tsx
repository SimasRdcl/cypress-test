import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage=()=>{
  return (<div>Home</div>)
}


const App = () => {
  return (

            <Router>
           
                <Switch>
                  <Route path="/" component={HomePage} />
                </Switch>
            
            </Router>
  );
};

export default App;
