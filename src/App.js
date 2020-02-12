import React, { Component } from 'react';
import Header from './Header';
import Aboutcourse from './aboutCourse';
import InformationStatistics from './informationStatistics';
import AboutAuthor from './aboutAuthor';
import Successstories from './successStories';
import Subscribearea from './subscribeArea';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Aboutcourse />
        <InformationStatistics />
        <AboutAuthor />
        <Successstories />
        <Subscribearea />
      </div>
    );
  }
}

export default App;
