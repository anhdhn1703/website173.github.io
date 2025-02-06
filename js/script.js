document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Xử lý gửi form liên hệ
    alert('Cảm ơn bạn đã liên hệ!');
});

// Thêm hiệu ứng smooth scroll cho menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
