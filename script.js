const triggerBtn = document.getElementById('triggerBtn');
const modal = document.getElementById('successModal');
const closeBtn = document.getElementById('closeBtn');

triggerBtn.addEventListener('click', () => {
    modal.classList.add('is-active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
});