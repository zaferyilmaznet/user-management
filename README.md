# 🧑‍💼 User Management Practice

A lightweight, modular JavaScript practice project that demonstrates core user management concepts — including authentication, role-based access control (ACL), and profile editing — **without a backend**.  
Built using **vanilla JS modules**, designed for easy future integration with real APIs or frameworks.

---

## 🚀 Features

- **User Sign Up / Sign In**  
  Basic authentication flow stored in `localStorage` (simulates backend).

- **Access Control (ACL)**  
  Simple role system: `public`, `editor`, `admin`.

- **Edit Profile**  
  Update username, email, and password while preserving role and ID.

- **Local Persistence**  
  All user data is saved in `localStorage` for demo purposes.

- **Modular Architecture**  
  Organized into separate files for scalability and clarity:
  - `state.js` – Data and logic (authentication, roles, storage)
  - `ui.js` – DOM manipulation and rendering
  - `main.js` – Glue layer / app initialization

---

## 🧩 Folder Structure

/js - - auth.js - main.js - state.js - storage.js - ui.js - utils.js
/index.html
/README.md
/style.css

---

## 🛠️ How It Works

1. **Sign up** creates a new user record in `localStorage`.
2. **Sign in** authenticates by checking stored users.
3. **Access control** logic determines visible UI elements based on role.
4. **Edit profile** updates user data using the spread operator to create a new object immutably.

---

## 🔐 Integration Tips

When connecting to a real backend later:

- Replace all `localStorage` logic in `state.js` with API calls (`fetch`, `axios`, etc.).
- Keep the **same UI logic** — only the data layer changes.
- Implement JWT or session-based authentication instead of in-browser checks.

---

## 🧠 Future Enhancements

- Password hashing before saving (security)
- Role-based dashboard views
- API integration (Node.js / Express / Firebase)
- Form validation and input feedback

---

## 📜 License

MIT — free to use, modify, and learn from.
