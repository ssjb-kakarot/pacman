document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.querySelector('.pacman');

    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
            pacman.style.left = (parseInt(getComputedStyle(pacman).left) + 10) + 'px';
        } else if (e.code === 'ArrowLeft') {
            pacman.style.left = (parseInt(getComputedStyle(pacman).left) - 10) + 'px';
        }
    });
});
