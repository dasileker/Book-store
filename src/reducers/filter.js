import { CHANGE_FILTER } from '../action-type/index';

export default (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.value;
    default:
      return state;
  }
};
