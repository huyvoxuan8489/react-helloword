import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reReducer from './../redux-reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger()

// export default function configureStore(preloadedState) {
// 	return createStore(
// 		rootReducer,
// 		preloadedState,
// 		applyMiddleware(
// 			thunkMiddleware,
// 			loggerMiddleware
// 		),
// 	)
// }
export default function configureStore(preloadedState) {
	return createStore(
		rootReducer, preloadedState, composeWithDevTools(
			applyMiddleware(
				thunkMiddleware,
				loggerMiddleware
			)
		)
	)
}