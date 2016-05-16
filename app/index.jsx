'use strict'

import 'babel-polyfill'
global.Promise = require('bluebird')

import 'isomorphic-fetch'

import '../style.css'

import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name}) => (<div>Hello {name}!</div>)

ReactDOM.render(<Hello name='James' />, document.getElementById('app'))
