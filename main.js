document.addEventListener('DOMContentLoaded', function() {
    function getStoredEvents() {
        return JSON.parse(localStorage.getItem('events')) || [];
    }

    function displayFeaturedEvents() {
        const featuredEventsSection = document.getElementById('featured-events');
        const eventList = featuredEventsSection.querySelector('.event-list');

        eventList.innerHTML = '';

        const events = getStoredEvents();

        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            eventDiv.innerHTML = `
                <h3>${event['event-title']}</h3>
                <p>Date: ${event['event-date-time']}</p>
                <p>Location: ${event['event-location']}</p>
                <p>Description: ${event['description']}</p>
            `;

            eventList.appendChild(eventDiv);
        });
    }

    displayFeaturedEvents();
});
