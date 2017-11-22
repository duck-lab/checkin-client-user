import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ ...props }) => {
  return <a className="button" onClick={props.onClick}>{props.title}</a>
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default Button
