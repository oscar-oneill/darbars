import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className='App'>
      <Router>
          <ScrollToTop/>
          <Navigation/>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
