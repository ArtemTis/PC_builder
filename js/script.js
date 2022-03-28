const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');

buttonsModal.forEach((button, index) => {
    button.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        document.body.classList.add('lock');
    })
})

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if (!isModal) {
        modalWindow.style.display = 'none';
        document.body.classList.remove('lock');
    }
})

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    document.body.classList.remove('lock');
})