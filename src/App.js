import "./App.css";
import Login from "./views/Login/Login";
import Detail from "./views/Detail/Detail";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Redirect to="/index"></Redirect> */}
        <Route path="/index" component={Login} exact></Route>
        <Route path="/personMsg"></Route>
        <Route path="/detail" component={Detail} exact></Route>
      </Router>
    </div>
  );
}

export default App;
