import { CHANGE_ACTIVE_ID } from '../constants/action_types';

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_ID:
      const newID = action.payload.id ? action.payload.id : null;

      return {
        ...state,
        activeIDsList: {
          ...state.activeIDsList,
          [action.payload.item]: newID,
        },
      };
    default:
      return state;
  }
};
