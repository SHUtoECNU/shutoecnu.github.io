(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const links = Array.from(navigation.querySelectorAll('a'));
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(expanded));
    navigation.classList.toggle('is-open', expanded);
  });
  links.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  const wideScreen = window.matchMedia('(min-width: 761px)');
  wideScreen.addEventListener('change', closeMenu);
  document.querySelector('#year').textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) return;
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  const setActive = id => links.forEach(link => {
    if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  let scheduled = false;
  function updateNavigation() {
    scheduled = false;
    const activationLine = Math.min(window.innerHeight * 0.32, 260);
    let current = '';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= activationLine) current = section.id;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = sections.at(-1).id;
    setActive(current);
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('reveal-visible');
    reveal.unobserve(entry.target);
  }), { threshold: 0.06 });
  document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-terminal').forEach(element => {
    element.classList.add('reveal-ready');
    reveal.observe(element);
  });
})();
