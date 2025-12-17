// js/ui.js
// Handles DOM rendering and switching between login/signup/dashboard screens.

import {
  signup,
  login,
  logout,
  updateProfile,
  isAuthenticated,
} from "./auth.js";
import { getCurrentUser } from "./state.js";

const app = document.querySelector("#app");

export function renderLoginForm() {
  app.innerHTML = `
    <form id="loginForm">
      <h2>Login</h2>
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p class="switch">No account? <span id="toSignup">Sign up</span></p>
    </form>
    `;

  document.querySelector("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = login({ email, password });
    if (result.success) renderDashboard();
    else alert(result.message);
  });

  document
    .querySelector("#toSignup")
    .addEventListener("click", renderSignupForm);
}

export function renderSignupForm() {
  app.innerHTML = `
  <form id="signupForm">
      <h2>Sign Up</h2>
      <input type="text" id="username" placeholder="Username" required />
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
      <p class="switch">Have an account? <span id="toLogin">Login</span></p>
    </form>
  `;

  document.querySelector("#signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = signup({ username, email, password });
    if (result.success) renderDashboard();
    else alert(result.message);
  });

  document.querySelector("#toLogin").addEventListener("click", renderLoginForm);
}

export function renderDashboard() {
  const user = getCurrentUser();
  if (!user) return renderLoginForm();

  app.innerHTML = `
  <section>
      <h2>Welcome, ${user.username}</h2>
      <p>Email: ${user.email}</p>
      <p>Role: ${user.role}</p>
      <button id="editProfileBtn">Edit Profile</button>
      <button id="logoutBtn">Logout</button>

      <div id="protectedContent" style="margin-top:1.5rem; padding:1rem; background:#f9f9f9; border-radius:8px;">
        <h3>Protected Content</h3>
        <p>This section is visible only to logged-in users.</p>
      </div>
    </section>
  `;

  document.querySelector("#logoutBtn").addEventListener("click", () => {
    logout();
    renderLoginForm();
  });

  document
    .querySelector("#editProfileBtn")
    .addEventListener("click", renderEditProfileForm);
}

export function renderEditProfileForm() {
  const user = getCurrentUser();
  if (!user) return renderLoginForm();

  app.innerHTML = `
   <form id="editForm">
      <h2>Edit Profile</h2>
      <input type="text" id="username" value="${user.username}" required />
      <input type="email" id="email" value="${user.email}" required />
      <input type="password" id="password" value="${user.password}" required />
      <button type="submit">Save</button>
      <p class="switch"><span id="cancelEdit">Cancel</span></p>
   </form>
  `;

  document.querySelector("#editForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const result = updateProfile({
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password,
    });
    if (result.success) {
      alert("Profile updated!");
      renderDashboard();
    } else alert(result.message);
  });

  document
    .querySelector("#cancelEdit")
    .addEventListener("click", renderDashboard);
}

export function renderApp() {
  isAuthenticated() ? renderDashboard() : renderLoginForm();
}
