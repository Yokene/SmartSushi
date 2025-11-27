document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.food-menu-slider');
    const cards = document.querySelectorAll('.food-card');
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');

    let currentIndex = 0;

    function updateSlider() {
        if (cards.length < 3) {
             cards.forEach(card => card.style.opacity = 1);
             return;
        }

        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev-card', 'next-card');

            const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
            const nextIndex = (currentIndex + 1) % cards.length;

            if (index === currentIndex) {
                card.classList.add('active');
            } 
            else if (index === prevIndex) {
                card.classList.add('prev-card');
            } 
            else if (index === nextIndex) {
                card.classList.add('next-card');
            }
        });
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    }

    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    updateSlider();
});