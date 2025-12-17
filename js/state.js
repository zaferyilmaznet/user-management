// js/state.js
// Application state management for users and session.

import {
  getUsers,
  saveUsers,
  getSession,
  saveSession,
  clearSession,
} from "./storage.js";

let users = getUsers(); // local 'database'
let currentUser = getSession(); // currently logged in user

export function getCurrentUser() {
  return currentUser;
}

export function getAllUsers() {
  return users;
}

export function addUser(user) {
  users.push(user);
  saveUsers(users);
}

export function loginUser(user) {
  currentUser = user;
  saveSession(user);
}

export function logoutUser() {
  currentUser = null;
  clearSession();
}

export function updateUser(updatedData) {
  // Replace the existing user in both arrays and session
  users = users.map((u) => (u.id === updatedData.id ? updatedData : u));
  currentUser = updatedData;
  saveUsers();
  saveSession(updatedData);
}

/* 
Integration tips
When connecting to a backend later:
Replace updateUser() calls with:

await fetch(`/api/users/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedUser)
});

Use JWT tokens or cookies instead of localStorage session.
Password updates should go through secure hashing on the server.
*/
