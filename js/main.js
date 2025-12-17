// js/main.js
// App entry point - decides which screen to render on load.
// Later, could integrate with router (e.g., hash-based or real SPA routing).

import { renderApp } from "./ui.js";

document.addEventListener("DOMContentLoaded", renderApp);
