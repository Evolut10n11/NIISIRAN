const fstPhoto = document.querySelector('.fstPhoto');

fstPhoto.addEventListener('mouseenter', () => {
    fstPhoto.classList.add('active');
});

fstPhoto.addEventListener('mouseleave', () => {
    fstPhoto.classList.remove('active');
});