(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuBody = document.querySelector('[data-menu-body]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');

    mobileMenuBody.classList.toggle('is-open');

    // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    //   if (!e.matches) return;
    //   mobileMenuRef.classList.remove('is-open');
    //   menuBtnRef.setAttribute('aria-expanded', false);
    //   bodyScrollLock.enableBodyScroll(document.body);
  });
})();
