'use strict'

import 'babel-polyfill'
global.Promise = require('bluebird')

import 'isomorphic-fetch'

import './style.css'

import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { createHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configure-store'
import { Provider } from 'react-redux'
import routes from './routes'

const history = createHistory()
const store = configureStore()
const syncedHistory = syncHistoryWithStore(history, store)

render(
  <Provider store={store}>
    <Router history={syncedHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
