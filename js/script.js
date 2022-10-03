const navLinks = Array.from(document.querySelectorAll('.links li'));
// navbar hover
document.addEventListener('mouseover', (e) => {
    if (!e.target.closest('.links')) return;
    navLinks.forEach((link) => link.classList.remove('active'));
    e.target.closest('li').classList.add('active');
});

// categories hover
const categories = Array.from(document.querySelectorAll('.categories-list li'));
categories.forEach((cat) => {
    cat.addEventListener('mouseover', (e) => {
        e.target.closest('li').classList.add('btn', 'red-btn');
    });
    cat.addEventListener('mouseleave', (e) => {
        e.target.closest('li').classList.remove('btn', 'red-btn');
        categories[0].classList.add('btn', 'red-btn');
    });
});
