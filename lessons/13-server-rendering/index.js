import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import { addRoot } from './modules/Root'

render((
  <Router history={browserHistory}>
    <Route path={addRoot("/")} component={App}>
      <IndexRoute component={Home}/>
      <Route path={addRoot("/repos")} component={Repos}>
        <Route path={addRoot("/repos/:userName/:repoName")} component={Repo}/>
      </Route>
      <Route path={addRoot("/about")} component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
