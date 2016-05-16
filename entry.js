'use strict'

import 'babel-polyfill'
global.Promise = require('bluebird')

import 'isomorphic-fetch'

import './style.css'

import content from './content'

content()
  .then(res => document.write(res))
