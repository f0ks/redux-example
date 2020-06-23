export const TYPES = {
    SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
    SET_TITLE: 'SET_TITLE',
};

export const actions = {
    setNotifications: (bool) => ({ type: TYPES.SET_NOTIFICATIONS, bool }),
    setTitle: (str) => ({ type: TYPES.SET_TITLE, str })
};