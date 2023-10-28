import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import './App.css';
import HMSQuote from './Pages/HMSQuote';
import Home from './Pages/Home';
import HMSInvoice from './Pages/HMSInvoice';

function App() {
  return (
    <div className="App">
      
<Router>
  <Routes>
  <Route exact path="/HMS" element={<Home />} />
  <Route exact path="/HMSInvoice" element={<HMSInvoice />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
