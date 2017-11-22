import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

export default function Protected(Children) {
  @inject('store')
  @observer
  class AuthenticatedComponent extends Component {
    constructor(props) {
      super(props)
      this.store = this.props.store.appState
    }

    render() {
      const { authenticated, authenticating } = this.store
      const redirectElement = !authenticating && !authenticated ? (<Redirect to={{
        pathname: '/login',
        state: {
          from: this.props.location
        }
      }}/>) : null
      return (
        <div className="authComponent">
          {authenticated ? <Children {...this.props}/> : redirectElement}
        </div>
      )
    }
  }
  AuthenticatedComponent.propTypes = {
    store: PropTypes.object,
    location: PropTypes.object
  }
  return AuthenticatedComponent
}
