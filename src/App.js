import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Navbar></Navbar>
       
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
       
       </BrowserRouter>
      </div>
     
  );
}

export default App;
