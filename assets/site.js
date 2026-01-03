(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after click (mobile)
    nav.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.matches && t.matches("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Last updated
  const el = document.getElementById("last-updated");
  if (el) {
    const lm = document.lastModified ? new Date(document.lastModified) : null;
    if (lm && !Number.isNaN(lm.getTime())) {
      const fmt = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "2-digit" });
      el.textContent = fmt.format(lm);
    } else {
      el.textContent = "—";
    }
  }
})();