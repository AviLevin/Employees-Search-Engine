import "./App.css";
import Nav from "../src/components/Nav";
import Users from "./components/Users";
import User from "../src/components/User";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Users />
          </Route>

          

          <Route
            path="/users/:id"
            render={(props) => <User {...props} />}
          />

       

          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
