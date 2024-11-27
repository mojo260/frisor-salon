// Function to fetch and display opening hours
async function fetchOpeningHours() {
    try {
        const response = await fetch('http://localhost:3000/api/opening-hours'); // API endpoint
        const schedules = await response.json();

        const contentSection = document.querySelector('.content-section');
        let html = '<h1>Åbningstider</h1><ul>';
        schedules.forEach(schedule => {
            html += `<li>${schedule.Day_of_week}: ${schedule.Start_time} - ${schedule.End_time}</li>`;
        });
        html += '</ul>';
        contentSection.innerHTML = html; // Render the schedule dynamically
    } catch (error) {
        console.error('Error fetching opening hours:', error);
        const contentSection = document.querySelector('.content-section');
        contentSection.innerHTML = '<p>Kunne ikke hente åbningstider. Prøv igen senere.</p>';
    }
}

// Automatically call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchOpeningHours);
