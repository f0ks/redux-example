import {TYPES} from './actions'

const initialStates = {
    settings: {
        notifications: true,
        title: 'default title',
    }
};

export const settings = (state = initialStates.settings, action) => {
    switch (action.type) {
        case TYPES.SET_NOTIFICATIONS:
            return Object.assign({}, state, {notifications: action.bool});
        case TYPES.SET_TITLE:
            return Object.assign({}, state, {title: action.str});
        default:
            return state
    }
};