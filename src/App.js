import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CarCard from './components/CarCard';
import CarList from './components/CarList';

import Footer from './components/Footer';
import Cars_data from './cars_data.json';
import {useEffect, useState} from 'react';
import {

  BrowserRouter,
 

 
  Route,
 
  Routes,
 
 } from "react-router-dom";
import Search from './components/Search';
 



function App() {
  

  return (
    <BrowserRouter>
    <div className='APP'>
      <Header/>
   <Routes>
   
    <Route path='/' element = { <CarList firstIndex = {0} lastIndex = {6}/>}></Route>
    {/* <Route path='/1' element = { <CarList firstIndex = {0} lastIndex = {6}/>}></Route> */}
    <Route path='/2' element = { <CarList firstIndex = {6} lastIndex = {12}/>}></Route>
    <Route path='/3' element = { <CarList firstIndex = {12} lastIndex = {18}/>}></Route>
    <Route path='/4' element = { <CarList firstIndex = {18} lastIndex = {24}/>}></Route>
    <Route path='/5' element = { <CarList firstIndex = {24} lastIndex = {30}/>}></Route>
    <Route path='/6' element = { <CarList firstIndex = {30} lastIndex = {36}/>}></Route>
    <Route path='/7' element = { <CarList firstIndex = {36} lastIndex = {42}/>}></Route>
    <Route path='/8' element = { <CarList firstIndex = {42} lastIndex = {48}/>}></Route>
    <Route path='/9' element = { <CarList firstIndex = {48} lastIndex = {54}/>}></Route>

   </Routes>
   <Footer className = "footerPosition"/>
   </div>
    </BrowserRouter>
  );
}

export default App;
