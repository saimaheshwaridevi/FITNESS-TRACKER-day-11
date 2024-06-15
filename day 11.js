document.addEventListener("DOMContentLoaded", function() {
    const fitnessForm = document.getElementById('fitnessForm');
    const entriesContainer = document.getElementById('entries');

    fitnessForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const workoutType = document.getElementById('workoutType').value;
        const caloriesBurned = parseInt(document.getElementById('caloriesBurned').value);
        const stepsTaken = parseInt(document.getElementById('stepsTaken').value);

        // Create entry element
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        // Create entry details
        const detailsParagraph = document.createElement('p');
        detailsParagraph.innerHTML = `<strong>Workout Type:</strong> ${workoutType}, <strong>Calories Burned:</strong> ${caloriesBurned}, <strong>Steps Taken:</strong> ${stepsTaken}`;

        // Append details to entry
        entryDiv.appendChild(detailsParagraph);

        // Append entry to entries container
        entriesContainer.appendChild(entryDiv);

        // Reset form
        fitnessForm.reset();
    });
});
