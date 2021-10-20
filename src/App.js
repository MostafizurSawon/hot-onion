// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Authenticate/Login';
import Signup from './pages/Authenticate/Signup';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* <Route path="/home">
              <Home></Home>
            </Route> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            {/* <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route> */}
            {/* <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute> */}
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
              <Footer></Footer>
          
      </Router>
    </div>
  );
}

export default App;
