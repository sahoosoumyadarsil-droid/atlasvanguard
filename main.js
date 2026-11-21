/* ============================================================
   ATLASVANGUARD — site config
   Change the Discord invite link in ONE place, right here.
   ============================================================ */
const DISCORD_INVITE = "https://discord.gg/TY9cFhgxP";

// Instagram profile (used by the [data-instagram] links).
const INSTAGRAM_URL = "https://www.instagram.com/teamav.inn";

document.querySelectorAll("[data-instagram]").forEach((el) => {
  el.setAttribute("href", INSTAGRAM_URL);
});

// Apply the invite to every Discord button/link on the page.
document.querySelectorAll("[data-discord]").forEach((el) => {
  el.setAttribute("href", DISCORD_INVITE);
});

/* ---------- sticky nav shading ---------- */
const nav = document.getElementById("nav");
const progress = document.getElementById("scrollProgress");

const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${pct}%`;
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);

/* ---------- mobile menu ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- scroll reveal ---------- */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealItems.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    io.observe(el);
  });
} else {
  revealItems.forEach((el) => el.classList.add("visible"));
}
