document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-container');
    const newQuoteButton = document.getElementById('button');

    async function fetchQuote() {
        const apiKey = 'bkpwwrKpgMgE7Tjs+6QK0A==Mq81mdFZBJPUwI5b'; // Replace with your actual API key
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'X-Api-Key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const quote = data[0].quote;
            const author = data[0].author;

            quoteContainer.textContent = `"${quote}" - ${author}`;
        } catch (error) {
            quoteContainer.textContent = 'Failed to fetch quote. Please try again later.';
            console.error('Error fetching quote:', error);
        }
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    // Fetch a quote when the page loads
    fetchQuote();
});


//Testing JS Quote Update For Cloud Across Devices Git and Git Hub 