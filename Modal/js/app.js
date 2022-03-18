const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal'); 
const close = document.getElementById('btnClose');


openModal.addEventListener('click', ()=> modal.classList.remove('hide'));
close.addEventListener('click', ()=> modal.classList.add('hide'));