// src/features/user/validateUserLoginForm.js

export function validateUserLoginForm(values) {
  const errors = {};

  // Require username
  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 6) {
    errors.username = 'Username must be at least 6 characters';
  } else if (values.username.length > 15) {
    errors.username = 'Username cannot exceed 15 characters';
  }

  // Require password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  return errors;
}
