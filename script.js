document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar').classList.add('scrolled');

        } else {
            document.getElementById('navbar').classList.remove('scrolled');

        }
    });
});
