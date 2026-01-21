document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('.add-btn');
    let count = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            badge.innerText = count;
            
            // Hiệu ứng nảy nhẹ cho badge
            badge.style.transform = 'scale(1.3)';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
            }, 200);
        });
    });
});