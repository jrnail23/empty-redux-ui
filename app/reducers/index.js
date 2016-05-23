import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import emptyReducer from './empty'

const rootReducer = combineReducers({
  empty: emptyReducer,
  routing: routerReducer
})

export default rootReducer
