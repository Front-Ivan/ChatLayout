'use strict'

const wrapper = document.querySelector('.chat-wrapper');
const firstHalf = document.querySelector('.chat__first-half');
const secondHalf = document.querySelector('.chat__second-half');
const header = document.querySelector('.chat__header');
const inputFiles = document.querySelector('.chat__input-files');

wrapper.addEventListener('click', (event) => {
    if (event.target.closest('.dialogues__user') && window.screen.width <= 560
        || window.screen.width <= 900 && window.screen.height <= 450) {
        firstHalf.classList.toggle('d-none')
        header.classList.toggle('d-none')
        secondHalf.style.display = 'block'
    } else if (event.target.closest('.chat__back') && window.screen.width <= 560) {
        firstHalf.classList.toggle('d-none')
        header.classList.toggle('d-none')
        secondHalf.style.display = 'none'
    }

    //input-files
    if (event.target.classList.contains('addFile')) {
        inputFiles.classList.toggle('d-none')
    } else if (!event.target.closest('.chat__input-files')) {
        inputFiles.classList.add('d-none')
    }
});



