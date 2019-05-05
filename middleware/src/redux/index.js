import {createStore, applyMiddleware} from 'redux'
import userReducer from './userReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

function configureStore(){
    return createStore(userReducer, applyMiddleware(logger, thunk));
}
export {
    configureStore
}