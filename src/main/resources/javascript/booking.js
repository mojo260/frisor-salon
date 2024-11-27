document.getElementById('booking-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const customerId = document.getElementById('customer-id').value;
    const hairdresserId = document.getElementById('hairdresser-id').value;
    const serviceId = document.getElementById('service-id').value;
    const bookingDate = document.getElementById('booking-date').value;
    const startTime = document.getElementById('start-time').value;
    const duration = document.getElementById('duration').value;

    const response = await fetch('http://localhost:3000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId, hairdresserId, serviceId, bookingDate, startTime, duration })
    });

    const result = await response.json();
    if (result.success) {
        alert(`Booking successful! Your booking ID is ${result.bookingId}`);
    } else {
        alert('Booking failed. Please try again.');
    }
});
