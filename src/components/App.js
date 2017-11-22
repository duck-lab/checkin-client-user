import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Route, withRouter } from "react-router-dom"
import { inject, observer } from "mobx-react"
import LazyRoute from "lazy-route"
import DevTools from "mobx-react-devtools"

import TopBar from "./TopBar"

@withRouter
@inject("store")
@observer
export default class App extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store
  }
  componentDidMount() {
    this.authenticate()
  }
  authenticate(e) {
    if (e) e.preventDefault()
    this.store.appState.authenticate()
  }
  render() {
    const { testval } = this.store.appState
    return (
      <div className="wrapper">
        <DevTools />
        <TopBar/>

        <Route
          exact
          path="/"
          render={props => (<LazyRoute {...props} component={
            import("./Home")
          }/>)}/>
        <Route
          exact
          path="/posts"
          render={props => (<LazyRoute {...props} component={
            import("./SubPage")
          }/>)}/>
        <Route
          exact
          path="/posts/:id"
          render={props => (<LazyRoute {...props} component={
            import("./SubItem")
          }/>)}/>
        <Route
          exact
          path="/login"
          render={props => (<LazyRoute {...props} component={
            import("./Login")
          }/>)}/>
        <footer>
          {testval}
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  store: PropTypes.func
}
