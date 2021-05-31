import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from './Components/Login';
import Join from './Components/joinfree';
import { BrowserRouter as Router,Route} from 'react-router-dom';
ReactDOM.render(<Router>
          <Route path='/' component={App}exact />
          <Route path='/Login' component={Login} exact/>
        <Route path='/joinfree' component={Join} exact />
</Router>, document.getElementById("root"));
