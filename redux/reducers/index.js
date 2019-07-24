import { combineReducers } from 'redux'
import booleansToggle from './booleansToggle'
import activeIDs from './activeIDs'

const rootReducer = combineReducers({
	booleansToggle,
	activeIDs
})

export default rootReducer
