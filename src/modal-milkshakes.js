(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-milkshakes-open]'),
    closeModalBtn: document.querySelector('[data-modal-milkshakes-close]'),
    modal: document.querySelector('[data-modal-milkshakes]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();