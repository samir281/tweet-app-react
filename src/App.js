import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home";
import Registration from './component/Registration';
import DirectLogin from './component/DirectLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return(
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home register="false" />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/directlogin" element={<DirectLogin />} />
      </Routes>
    </Router>
  </div>
 );
}

export default App;
