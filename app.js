// CODIGO ABIERTO BY YUNG SAMY - DISCORD: likeadversario
// GITHUB: https://github.com/yungsamy4p/fdn-portal
// INSTAGRAM: https://www.instagram.com/yungsamy4p

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const articles = document.querySelectorAll('.normative-card');

    // Navegación suave con botones
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const targetEl = document.getElementById(targetId);

            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // Resaltado de botón activo mediante Scroll
    window.addEventListener('scroll', () => {
        let currentActive = '';

        articles.forEach(card => {
            const cardTop = card.offsetTop - 150;
            const cardHeight = card.clientHeight;

            if (window.scrollY >= cardTop && window.scrollY < cardTop + cardHeight) {
                currentActive = card.getAttribute('id');
            }
        });

        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.target === currentActive) {
                btn.classList.add('active');
            }
        });
    });
});