import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0,
  }
  setProgress = (progress) =>
  {
    this.setState({progress : progress})
  }
  render() {
    return (
      <div className="root">
         <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
        height={3} 
        transitionTime={2000}
        />
        <Navbar date = {new Date().toDateString()}/>
        <Routes>
          <Route path='/' element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route path='/business' element={<News setProgress = {this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="business"/>}></Route>
          <Route path='/entertainment' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          {/* <Route path='/general' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"/>}></Route> */}
          <Route path='/health' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route path='/science' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route path='/sports' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route path='/technology' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
