// React and CSS Imports
import React from "react";
import "./App.scss";
import "globals/hack-styles.scss";
import '../node_modules/react-vis/dist/style.css';

// Installed dependency imports
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Website imports for classes you made
import { UserList } from "app/views/";
import { SearchPage } from "app/views/";

function App() {
  return (
    <div className="app fill-view">
      <Router>
        <Switch>
          <Route 
            exact path={"/"}
            component={SearchPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
