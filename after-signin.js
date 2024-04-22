document.addEventListener('DOMContentLoaded', function() {
    var eventDetailsContainer = document.getElementById('event-details');

    var eventData = JSON.parse(localStorage.getItem('eventData'));

    if (eventData) {
        for (var key in eventData) {
            var detail = document.createElement('p');
            detail.textContent = `${key}: ${eventData[key]}`;
            eventDetailsContainer.appendChild(detail);
        }
    }
});
