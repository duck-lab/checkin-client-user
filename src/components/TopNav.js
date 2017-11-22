import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import ActiveLink from './ui/ActiveLink'

@inject('store')
@observer
export default class TopNav extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store.appState
  }

  authenticate(e) {
    if (e) e.preventDefault()
    this.props.store.authenticate()
  }

  render() {
    const { authenticated } = this.store
    return (
      <nav>
        <ActiveLink activeOnlyWhenExact to="/">Home</ActiveLink>
        {authenticated && <ActiveLink to="/posts">Posts</ActiveLink>}
      </nav>
    )
  }
}

TopNav.propTypes = {
  store: PropTypes.func
}
