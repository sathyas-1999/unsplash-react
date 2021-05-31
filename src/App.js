import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Headersearch from './Components/Headersearch';
import Search from './Components/search';
function App() {
  const[header,setheadersearch]=useState(" ");
  function handle(data){
    setheadersearch(data);
    }
  return (
    <Router>
      <Header query={handle}/>
      <Navbar query={handle}/>
      <Route path='/' component={()=><Headersearch query={handle}/>}exact /> 
      <Route path='/search'component={()=><Search x={header}/>}exact />
    </Router>

  );
}
export default App;
