import React from 'react';
import './App.css';
import ListView from './ListView';
import Tweets from './Tweets';
import Composer from './Composer';

const App = () => {
  return (
    <div className="app">
      <ListView/>

      <div className="main">
        <Tweets/>
        <div className="feed">
          <Composer/>
        </div>
      </div>
    </div>
  );  
};

export default App;

