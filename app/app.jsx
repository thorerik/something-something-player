import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

var Main = require('Main');
var Player = require('Player');


// load foundation-sites
$(document).foundation();

// load our own custom styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Player}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
