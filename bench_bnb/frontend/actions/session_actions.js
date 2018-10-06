export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const login = (user) => ({
  action: LOGIN,
  user
});

export const logout = () => ({
  action: LOGOUT,
});

export const signup = (user) => ({
  action: SIGNUP,
  user
});

export const receiveCurrentUser = (currentUser) => ({
  action: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  action: RECEIVE_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  action: RECEIVE_CURRENT_USER,
  errors
});
