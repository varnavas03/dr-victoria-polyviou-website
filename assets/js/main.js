(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const navLinks = [...document.querySelectorAll('.primary-nav a')];
  const modal = document.getElementById('reminder-modal');
  const form = document.getElementById('interest-form');
  const status = document.querySelector('.form-status');

  const setHeaderState = () => header.classList.toggle('scrolled', window.scrollY > 12);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));

  const sections = [...document.querySelectorAll('main section[id]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-42% 0px -50% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));

  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

  const closeModal = () => {
    modal?.classList.remove('show');
    modal?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  form?.addEventListener('submit', event => {
    event.preventDefault();
    const acknowledgement = form.elements.acknowledge;
    if (!acknowledgement.checked) {
      status.textContent = 'Επιβεβαιώστε ότι δεν έχετε εισαγάγει ευαίσθητα δεδομένα.';
      acknowledgement.focus();
      return;
    }
    status.textContent = '';
    modal?.classList.add('show');
    modal?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.querySelector('.modal-close')?.focus();
    form.reset();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
