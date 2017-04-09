import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import DayOne from './DayOne';
import DayTwo from './DayTwo';
import DayThree from './DayThree';
import DayFour from './DayFour';
import DayFive from './DayFive';
import DaySix from './DaySix';
import DaySeven from './DaySeven';

import './index.css';

const Root = function() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/day1" component={DayOne} />
        <Route exact path="/day2" component={DayTwo} />
        <Route exact path="/day3" component={DayThree} />
        <Route exact path="/day4" component={DayFour} />
        <Route exact path="/day5" component={DayFive} />
        <Route exact path="/day6" component={DaySix} />
        <Route exact path="/day7" component={DaySeven} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
