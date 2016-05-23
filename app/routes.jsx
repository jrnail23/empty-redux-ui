import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Main from './containers/main-container'
import HomeContent from './components/home/content'
import AboutContent from './components/about/content'
import NotFoundView from './components/not-found'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={HomeContent} />
    <Route path='about' component={AboutContent} />
    <Route path='404' component={NotFoundView} />
    <Redirect from='*' to='404' />
  </Route>
)
