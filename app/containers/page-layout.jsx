import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const Page = ({children}) => (
  <div>
    <nav id='toplinks'>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
    </nav>
    <div className='dev'>
      {children}
    </div>
  </div>
)

Page.propTypes = {
  children: PropTypes.node
}

export default Page
