import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Main extends Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <div>Placeholder</div>
        <hr />
        {children}
      </div>
    )
  }
}

Main.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps)(Main)
