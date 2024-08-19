document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const query = document.getElementById('search-input').value.trim();

    // Simple client-side validation
    if (query === '') {
        alert('Please enter a search term.');
        return;
    }

    // Fetching search results (Simulate a request to the server)
    fetch(`/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('search-results');
            resultsDiv.innerHTML = ''; // Clear previous results

            if (data.items.length === 0) {
                resultsDiv.innerHTML = '<p>No items found.</p>';
                return;
            }

            data.items.forEach(item => {
                const itemElement = document.createElement('p');
                itemElement.textContent = `${item.name} - $${item.price}`;
                resultsDiv.appendChild(itemElement);
            });
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
});
