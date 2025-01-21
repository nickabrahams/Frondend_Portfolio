// Wacht tot de pagina volledig is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer de menu button en menu elementen
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li a');

    // Toggle menu wanneer op de hamburger wordt geklikt
    if(menuBtn) {
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }

    // Sluit menu wanneer op een link wordt geklikt
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});