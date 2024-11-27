// Update the "info-section" dynamically
function updateInfoSection(title, content) {
    const infoSection = document.getElementById("info-section");
    infoSection.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    infoSection.style.display = "block";
}

// Highlight active navigation link
function highlightNavLink(activePage) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.href.includes(activePage)) {
            link.style.backgroundColor = '#ffd700'; // Highlight with yellow
            link.style.color = '#000'; // Black text for active link
        }
    });
}

// Automatically highlight the active link when the page loads
document.addEventListener('DOMContentLoaded', () => {
    highlightNavLink('about.html');
});
