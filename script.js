const searchTerms = ['Toyota Camry', 'Ford Mustang', 'Honda Civic'];
let currentCar = '';

// Function to fetch images from Wikimedia Commons
async function fetchCarImage(searchTerm) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=10&gsrsearch=${encodeURIComponent(searchTerm)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const pages = data.query.pages;
        const imageUrls = Object.keys(pages).map(page => pages[page].imageinfo[0].url);
        return imageUrls[Math.floor(Math.random() * imageUrls.length)]; // Return a random image URL
    } catch (error) {
        console.error('Error fetching data:', error);
        return '';
    }
}

// Function to initialize the game with a new car image
async function newGame() {
    const searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)]; // Pick a random search term
    currentCar = searchTerm; // Assuming the search term directly corresponds to the car's make and model
    const imageUrl = await fetchCarImage(searchTerm);
    if (imageUrl) {
        document.getElementById('carImage').src = imageUrl;
    } else {
        // Handle the case where no image was found
        document.getElementById('feedback').textContent = 'Failed to load car image. Please try again.';
    }
    document.getElementById('userGuess').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

// Event listener for the guess button
document.getElementById('guessButton').addEventListener('click', function () {
    const userGuess = document.getElementById('userGuess').value.toLowerCase();
    const actual = currentCar.toLowerCase();
    if (userGuess === actual) {
        document.getElementById('feedback').textContent = 'Correct! Well done.';
        document.getElementById('nextButton').style.display = 'block';
    } else {
        document.getElementById('feedback').textContent = 'Wrong, try again!';
    }
});

// Event listener for the next button
document.getElementById('nextButton').addEventListener('click', function () {
    newGame();
});

// Start a new game on initial load
newGame();