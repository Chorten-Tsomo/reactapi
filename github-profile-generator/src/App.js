import Home from "./Home";
import GitProfile from "./GitProfile";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
  
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={GitProfile}/>
      </Switch>
    </Router>
    </>

  );
}

export default App;
