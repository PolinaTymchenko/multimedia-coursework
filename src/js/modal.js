const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    submitModalBtn: document.querySelector('[data-modal-submit]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('.js-modal-opened'),
    backdrop: document.querySelector('.backdrop'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.submitModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', backdropclick);

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('js-modal-opened');
}

function backdropclick(e) {
    if (e.target !== e.currentTarget) return;
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('js-modal-opened');
}
