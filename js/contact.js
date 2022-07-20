const contactModalRef = document.querySelector('[data-contact]');
const openContactModalRef = document.querySelector('[data-open-modal]');

openContactModalRef.addEventListener('click', onOpenContactModalClick);

function onOpenContactModalClick(e) {
  e.preventDefault();

  if (contactModalRef.classList.contains('backdrop--is-hidden')) {
    contactModalRef.classList.remove('backdrop--is-hidden');
  }

  contactModalRef.addEventListener('click', onContactModalClose);
}

function onContactModalClose(e) {
  if (e.target !== e.currentTarget) return;

  if (!contactModalRef.classList.contains('backdrop--is-hidden')) {
    contactModalRef.classList.add('backdrop--is-hidden');
  }

  contactModalRef.removeEventListener('click', onContactModalClose);
}
