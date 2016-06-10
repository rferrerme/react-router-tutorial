import React from 'react'
import NavLink from './NavLink'
import { addRoot } from './Root'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to={addRoot("/")} onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to={addRoot("/about")}>About</NavLink></li>
          <li><NavLink to={addRoot("/repos")}>Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
