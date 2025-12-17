// js/utils.js
// Helper functions for validation, formatting, etc.

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password) {
  return password.length >= 6;
}

// In future, integrate with backend validation (some regex or server check)
