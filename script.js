const body = document.body;
const preloader = document.querySelector(".preloader");
const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll("[data-reveal]");

const setScrollProgress = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  body.style.setProperty("--scroll-progress", progress.toFixed(2));
};

const syncHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -10% 0px",
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener("load", () => {
  window.setTimeout(() => {
    preloader?.classList.add("is-leaving");
  }, 2300);

  window.setTimeout(() => {
    body.classList.add("is-ready");
    setScrollProgress();
    syncHeaderState();
    revealItems.forEach((item, index) => {
      if (index < 2) {
        item.classList.add("is-visible");
      }
    });
  }, 2950);

  window.setTimeout(() => {
    preloader?.remove();
  }, 3900);
});

window.addEventListener("scroll", () => {
  setScrollProgress();
  syncHeaderState();
});

window.addEventListener("resize", setScrollProgress);
