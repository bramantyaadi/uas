
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/layout/login';
import Home from './Component/layout/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
      <Switch>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
