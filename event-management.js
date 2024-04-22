document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('event-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var formData = new FormData(form);

        var eventData = {};
        formData.forEach(function(value, key) {
            eventData[key] = value;
        });

        var events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(eventData);
        localStorage.setItem('events', JSON.stringify(events));

        window.location.href = 'after-signin.html';
    });
});
