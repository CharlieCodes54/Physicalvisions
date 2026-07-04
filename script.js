// Physical Visions — Home page behavior
// No build step: this file is loaded directly via <script src="script.js">.

(function () {
  // ---------------------------------------------------------
  // Countdown to the next Thursday call
  // ---------------------------------------------------------
  function nextThursday() {
    const now = new Date();
    const result = new Date(now);
    const daysUntilThursday = (4 - now.getDay() + 7) % 7 || 7; // 4 = Thursday
    result.setDate(now.getDate() + daysUntilThursday);
    result.setHours(18, 0, 0, 0); // 6:00 PM local
    return result;
  }

  function updateCountdown() {
    const target = nextThursday();
    const diffMs = target - new Date();

    const days = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diffMs / (1000 * 60 * 60)) % 24));

    document.querySelectorAll('[data-countdown-days]').forEach((el) => {
      el.textContent = days;
    });
    document.querySelectorAll('[data-countdown-hours]').forEach((el) => {
      el.textContent = hours;
    });
  }

  updateCountdown();
  setInterval(updateCountdown, 60 * 1000);

  // ---------------------------------------------------------
  // Seats remaining — update this constant each week
  // (no backend yet; wire to GHL later if it exposes a count)
  // ---------------------------------------------------------
  const SEATS_LEFT_THIS_WEEK = 6;
  document.querySelectorAll('[data-seats-left]').forEach((el) => {
    el.textContent = SEATS_LEFT_THIS_WEEK;
  });

  // ---------------------------------------------------------
  // Mobile nav toggle
  // ---------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------------------------------------------------------
  // Scroll-reveal: fade/slide in .reveal elements once visible
  // ---------------------------------------------------------
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }
})();
