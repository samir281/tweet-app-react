import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home";
import Registration from './component/Registration';
import DirectLogin from './component/DirectLogin';
import Success from './component/Success';
import PostTweets from './component/PostTweets';
import MyTweets from './component/MyTweets';
import UpdateTweet from './component/UpdateTweet';
import ForgotPassword from './component/ForgotPassword';
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
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/directlogin" element={<DirectLogin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/posttweets" element={<PostTweets />} />
        <Route path="/mytweets" element={<MyTweets />} />
        <Route path="/updateTweet" element={<UpdateTweet/>}/>
      </Routes>
    </Router>
  </div>
 );
}

export default App;
