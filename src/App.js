import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';

function App() {
  return (
    <div className='App'>
      <Router>
          <Navigation/>
          <Route path='/' exact component={Home}/>
          <Route path='/menu' exact component={Menu}/>
          <Route path='/contact' component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
