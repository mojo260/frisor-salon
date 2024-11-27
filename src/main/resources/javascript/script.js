function openBooking() {
    window.location.href = "/booking";
}

function showAvailableTimes() {
    updateInfoSection(
        "Ledige Tider",
        "Mandag - Fredag: 10:00 - 18:00<br>Lørdag: 10:00 - 15:00"
    );
}

function openLogin() {
    window.location.href = "/login";
}

function showOpeningHours() {
    updateInfoSection(
        "Åbningstider",
        "Mandag - Fredag: 10:00 - 18:00<br>Lørdag: 10:00 - 15:00"
    );
}

function updateInfoSection(title, content) {
    const infoSection = document.getElementById("info-section");
    infoSection.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    infoSection.style.display = "block";
}
