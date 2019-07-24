import { CHANGE_BOOLEAN_TOGGLE } from '../constants/action_types';

export default (state={}, action) => {
  switch (action.type) {
    case CHANGE_BOOLEAN_TOGGLE:
        const stateToggleItem = state.toggleList ? state.toggleList[action.payload.item] : false || false
        const changeValue = action.payload.value ? action.payload.value : !stateToggleItem

        const item = {...state, 
          toggleList: {
            ...state.toggleList, 
            [action.payload.item]: changeValue
          }
        }

        // console.log("STATE", item)

        return item;
    default:
        return state
  }
}