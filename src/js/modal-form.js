(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-form-open]'),
    openModalMobileBtn: document.querySelector('[data-modal-formmobil-open]'),
    closeModalBtn: document.querySelector('[data-modal-form-close]'),
    modal: document.querySelector('[data-modal-form]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalMobileBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle('is-hidden');
  }
})();