import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import api from '../middleware/api'
import rootReducer from '../reducers'

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk) // , api)
  )
}
