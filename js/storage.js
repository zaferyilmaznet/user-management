// js/storage.js
// Abstraction layer for localStorage -
// Later you can replace these with real API calls (e.g., fetch('/api/users')).

const USERS_KEY = "users";
const SESSION_KEY = "sessionUser";

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function getSession() {
  return JSON.parse(localStorage.getItem(SESSION_KEY));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
