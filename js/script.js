// Управление модальными окнами
document.addEventListener('DOMContentLoaded', function() {
    // Обо мне
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutModal = document.getElementById('aboutModal');
    const aboutClose = document.getElementById('aboutClose');
    
    if (aboutBtn && aboutModal && aboutClose) {
        aboutBtn.addEventListener('click', () => {
            aboutModal.classList.add('active');
        });
        
        aboutClose.addEventListener('click', () => {
            aboutModal.classList.remove('active');
        });
    }
    
    // Цены
    const pricingBtn = document.getElementById('pricingBtn');
    const pricingModal = document.getElementById('pricingModal');
    const pricingClose = document.getElementById('pricingClose');
    
    if (pricingBtn && pricingModal && pricingClose) {
        pricingBtn.addEventListener('click', () => {
            pricingModal.classList.add('active');
        });
        
        pricingClose.addEventListener('click', () => {
            pricingModal.classList.remove('active');
        });
    }
    
    // Закрытие модальных окон при клике вне контента
    window.addEventListener('click', (e) => {
        if (aboutModal && e.target === aboutModal) {
            aboutModal.classList.remove('active');
        }
        if (pricingModal && e.target === pricingModal) {
            pricingModal.classList.remove('active');
        }
    });
    
    // Анимация при наведении на кнопки
    const buttons = document.querySelectorAll('button, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
    
    // Отправка формы
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
            this.reset();
        });
    }
});