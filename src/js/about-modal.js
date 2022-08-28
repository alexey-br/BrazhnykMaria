const aboutModalRef = document.querySelector('[data-about]');
const heroImgRef = document.querySelector('.hero-img');

heroImgRef.addEventListener('click', openAboutModal);

function openAboutModal(e) {
  console.log('click');
  if (aboutModalRef.classList.contains('backdrop--is-hidden')) {
    aboutModalRef.classList.remove('backdrop--is-hidden');
  }

  document.body.classList.add('lock-scroll');

  aboutModalRef.addEventListener('click', onAboutModalClose);
  document.addEventListener('keydown', onContactModalEscClose);
}

function onAboutModalClose(e) {
  if (e.target !== e.currentTarget) return;

  closeAboutModal();
}

function onContactModalEscClose(e) {
  if (e.code === 'Escape') closeAboutModal();
}

function closeAboutModal() {
  if (!aboutModalRef.classList.contains('backdrop--is-hidden')) {
    aboutModalRef.classList.add('backdrop--is-hidden');
  }

  document.body.classList.remove('lock-scroll');

  aboutModalRef.removeEventListener('click', onAboutModalClose);
  document.removeEventListener('keydown', onContactModalEscClose);
}
