import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div className="App">
      {/* <Header title='Piggie'/> 
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>*/}
      </div>
      <Switch>
        <Route path ="/" exact component={Login}/>
        <Route path ="/home" component={Home}/>
        <Route path ="/about" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
