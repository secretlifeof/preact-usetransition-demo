import * as constants from '../constants/action_types'

export const changeBooleansToggle = (item, value) => {
	return {
		type: constants.CHANGE_BOOLEAN_TOGGLE,
		payload: {
			item,
			value
		}
	}
}

export const setActiveID = (item, id) => {
	return {
		type: constants.CHANGE_ACTIVE_ID,
		payload: {
			item,
			id
		}
	}
}
