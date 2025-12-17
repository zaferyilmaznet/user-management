// js/auth.js
// Handles signup, login, and logout logic.
// Later this can connect to a backend with fetch('/api/signup'), etc.

import {
  getAllUsers,
  addUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUser,
} from "./state.js";
import { validateEmail, validatePassword } from "./utils.js";

export function signup({ username, email, password }) {
  if (!validateEmail(email))
    return { success: false, message: "Invalid email." };
  if (!validatePassword(password))
    return {
      success: false,
      message: "Password must be at least 6 characters.",
    };

  const users = getAllUsers();
  if (users.find((u) => u.email === email)) {
    return { success: false, message: "Email already registered." };
  }

  const newUser = { id: Date.now(), username, email, password, role: "public" };
  addUser(newUser);
  loginUser(newUser);

  return { success: true, message: "Signup successful!" };
}

export function login({ email, password }) {
  const users = getAllUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return { success: false, message: "Invalid credentials." };

  loginUser(user);
  return { success: true, message: "Login successful!" };
}

export function logout() {
  logoutUser();
}

export function isAuthenticated() {
  return !!getCurrentUser();
  // !! - just forces a truthy/falsy value into a real true or false boolean — handy for quick condition checks like authentication.
  // It's shorthand for return getCurrentUser() ? true : false;
}

export function updateProfile({ username, email, password }) {
  const user = getCurrentUser();
  if (!user) return { success: false, message: "Not logged in." };
  if (!validateEmail(email))
    return { success: false, message: "Invalid email." };
  if (!validatePassword(password))
    return { success: false, message: "Password too short." };

  const updatedUser = {
    ...user,
    username,
    email,
    password,
  };
  /* Take all properties from user, 
  but then overwrite (update) these specific keys with the new values provided.
  In JavaScript object literals, if a property key appears twice, the last one wins. */
  updateUser(updatedUser);
  return { success: true, message: "Profile updated." };
}
