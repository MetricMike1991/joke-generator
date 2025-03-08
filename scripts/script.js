const quoteContainer = document.getElementById('quote-container');
const quoteButton = document.getElementById('button');

async function fetchJoke() {
    const apiUrl = 'https://api.api-ninjas.com/v1/jokes';
    const apiKey = 'bkpwwrKpgMgE7Tjs+6QK0A==Mq81mdFZBJPUwI5b';

    try {
        const response = await fetch(apiUrl, {
            headers: { 'X-Api-Key': apiKey }
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonResponse = await response.json();
        console.log('JSON Response:', jsonResponse);

        const joke = jsonResponse[0].joke; // Assuming the API returns an array of jokes
        quoteContainer.innerHTML = joke;

    } catch (error) {
        quoteContainer.innerHTML = 'An error occurred';
        console.log('Error:', error);
    }
}

quoteButton.addEventListener('click', fetchJoke);