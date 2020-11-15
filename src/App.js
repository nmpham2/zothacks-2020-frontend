// React and CSS Imports
import React, {useState} from "react";
import "./App.scss";
import "globals/hack-styles.scss";
import '../node_modules/react-vis/dist/style.css';

// Installed dependency imports
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Website imports for classes you made
import { UserList } from "app/views/";
import { SearchPage } from "app/views/";
import { RecipePage } from "app/views/";

function App() {
  const [recipe, setRecipe] = useState([]);
  return (
    <div className="app fill-view">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <SearchPage recipe={recipe} setRecipe={setRecipe}/>
          </Route>
          <Route exact path={"/recipes"}>
            <RecipePage recipe={recipe}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
