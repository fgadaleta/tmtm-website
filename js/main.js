(function () {
  "use strict";

  // ---- Year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Theme toggle (persisted) ----
  // Light is always the default on first visit, regardless of OS preference.
  // Dark mode is opt-in only, via this toggle, remembered for next time.
  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var stored = localStorage.getItem("tmtm-theme");
  if (stored === "dark") {
    root.setAttribute("data-theme", "dark");
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("tmtm-theme", next);
    });
  }

  // ---- Mobile nav ----
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      mobileMenu.style.display = open ? "flex" : "none";
      navToggle.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        mobileMenu.style.display = "none";
      });
    });
  }

  // ---- Close only one TOC item open at a time on mobile for less scroll (optional, gentle) ----
  // Left as native <details> behavior — no JS needed, works without JS too.
})();
