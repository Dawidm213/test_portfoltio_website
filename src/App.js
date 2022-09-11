import './App.css';
import Home from './components/home';
import Animations from './components/Animations';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return(
    <>
    <Header />
    <AnimatePresence exitBeforeEnter>
      
      <Routes location={location} key={location.pathname} >
        
        
        <Route path='/test_portfoltio_website' element={<Home />}  />
        <Route path='/Animations' element={<Animations />}  />
      </Routes>
    </AnimatePresence>
    </>
  )
};

export default App;
