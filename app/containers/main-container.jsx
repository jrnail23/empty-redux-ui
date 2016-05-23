import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PageLayout from './page-layout'

class MainContainer extends Component {
  render () {
    const { children, ...otherProps } = this.props
    return (
      <PageLayout children={children} {...otherProps} />
    )
  }
}

MainContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps)(MainContainer)
