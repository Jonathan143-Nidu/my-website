document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Optional: Add hover effects for links or sections
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        document.getElementById('cursor').style.transform = 'scale(2)';
    });
    link.addEventListener('mouseout', () => {
        document.getElementById('cursor').style.transform = 'scale(1)';
    });
});
