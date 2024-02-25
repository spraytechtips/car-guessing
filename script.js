const searchTerms = [
    'Acura MDX', 'Acura RDX', 'Acura TL', 'Acura TLX', 'Acura TSX',
    'Alfa Romeo 4C', 'Alfa Romeo Giulia', 'Alfa Romeo Stelvio', 'Aston Martin DB11', 'Aston Martin DB9',
    'Aston Martin DBS Superleggera', 'Aston Martin Vantage', 'Audi A3', 'Audi A4', 'Audi A5',
    'Audi A6', 'Audi A7', 'Audi A8', 'Audi Q3', 'Audi Q5',
    'Audi Q7', 'Audi Q8', 'Audi R8', 'Audi TT', 'Bentley Bentayga',
    'Bentley Continental GT', 'Bentley Flying Spur', 'BMW 1 Series', 'BMW 2 Series', 'BMW 3 Series',
    'BMW 4 Series', 'BMW 5 Series', 'BMW 6 Series', 'BMW 7 Series', 'BMW 8 Series',
    'BMW i3', 'BMW i8', 'BMW X1', 'BMW X2', 'BMW X3',
    'BMW X4', 'BMW X5', 'BMW X6', 'BMW X7', 'BMW Z4',
    'Buick Enclave', 'Buick Encore', 'Buick Envision', 'Buick LaCrosse', 'Buick Regal',
    'Cadillac ATS', 'Cadillac CT4', 'Cadillac CT5', 'Cadillac CT6', 'Cadillac CTS',
    'Cadillac Escalade', 'Cadillac XT4', 'Cadillac XT5', 'Cadillac XT6', 'Chevrolet Blazer',
    'Chevrolet Bolt', 'Chevrolet Camaro', 'Chevrolet Colorado', 'Chevrolet Corvette', 'Chevrolet Cruze',
    'Chevrolet Equinox', 'Chevrolet Impala', 'Chevrolet Malibu', 'Chevrolet Silverado', 'Chevrolet Sonic',
    'Chevrolet Spark', 'Chevrolet Suburban', 'Chevrolet Tahoe', 'Chevrolet Traverse', 'Chevrolet Trax',
    'Chrysler 300', 'Chrysler Pacifica', 'Chrysler Voyager', 'Citroen C3', 'Citroen C4',
    'Citroen DS5', 'Dodge Challenger', 'Dodge Charger', 'Dodge Durango', 'Dodge Grand Caravan',
    'Dodge Journey', 'Dodge Ram 1500', 'Dodge Viper', 'Ferrari 488', 'Ferrari California',
    'Ferrari F8 Tributo', 'Ferrari Portofino', 'Ferrari Roma', 'Ferrari SF90 Stradale', 'Fiat 124 Spider',
    'Fiat 500', 'Fiat 500L', 'Fiat 500X', 'Ford Bronco', 'Ford EcoSport',
    'Ford Edge', 'Ford Escape', 'Ford Expedition', 'Ford Explorer', 'Ford F-150',
    'Ford Fiesta', 'Ford Focus', 'Ford Fusion', 'Ford Mustang', 'Ford Ranger', 'Ford Taurus', 'Ford Transit', 'Genesis G70', 'Genesis G80', 'Genesis G90',
    'GMC Acadia', 'GMC Canyon', 'GMC Sierra', 'GMC Terrain', 'GMC Yukon',
    'Honda Accord', 'Honda Civic', 'Honda CR-V', 'Honda Fit', 'Honda HR-V',
    'Honda Odyssey', 'Honda Passport', 'Honda Pilot', 'Honda Ridgeline', 'Hyundai Accent',
    'Hyundai Elantra', 'Hyundai Genesis', 'Hyundai Kona', 'Hyundai Palisade', 'Hyundai Santa Fe',
    'Hyundai Sonata', 'Hyundai Tucson', 'Hyundai Veloster', 'Infiniti Q50', 'Infiniti Q60',
    'Infiniti Q70', 'Infiniti QX50', 'Infiniti QX60', 'Infiniti QX80', 'Jaguar E-Pace',
    'Jaguar F-Pace', 'Jaguar F-Type', 'Jaguar XE', 'Jaguar XF', 'Jaguar XJ',
    'Jeep Cherokee', 'Jeep Compass', 'Jeep Gladiator', 'Jeep Grand Cherokee', 'Jeep Renegade',
    'Jeep Wrangler', 'Kia Cadenza', 'Kia Forte', 'Kia K900', 'Kia Niro',
    'Kia Optima', 'Kia Rio', 'Kia Seltos', 'Kia Sorento', 'Kia Soul',
    'Kia Sportage', 'Kia Stinger', 'Kia Telluride', 'Lamborghini Aventador', 'Lamborghini Huracan',
    'Lamborghini Urus', 'Land Rover Discovery', 'Land Rover Discovery Sport', 'Land Rover Range Rover', 'Land Rover Range Rover Evoque',
    'Land Rover Range Rover Sport', 'Land Rover Range Rover Velar', 'Lexus ES', 'Lexus GS', 'Lexus GX',
    'Lexus IS', 'Lexus LC', 'Lexus LS', 'Lexus LX', 'Lexus NX',
    'Lexus RC', 'Lexus RX', 'Lexus UX', 'Lincoln Aviator', 'Lincoln Continental',
    'Lincoln Corsair', 'Lincoln MKC', 'Lincoln MKZ', 'Lincoln Nautilus', 'Lincoln Navigator',
    'Maserati Ghibli', 'Maserati GranTurismo', 'Maserati Levante', 'Maserati Quattroporte', 'Mazda 3',
    'Mazda 6', 'Mazda CX-3', 'Mazda CX-30', 'Mazda CX-5', 'Mazda CX-9',
    'Mazda MX-5 Miata', 'McLaren 570S', 'McLaren 720S', 'McLaren GT', 'McLaren Senna',
    'Mercedes-Benz A-Class', 'Mercedes-Benz C-Class', 'Mercedes-Benz CLA', 'Mercedes-Benz CLS', 'Mercedes-Benz E-Class',
    'Mercedes-Benz G-Class', 'Mercedes-Benz GLA', 'Mercedes-Benz GLB', 'Mercedes-Benz GLC', 'Mercedes-Benz GLE',
    'Mercedes-Benz GLS', 'Mercedes-Benz S-Class', 'Mercedes-Benz SL', 'Mercedes-Benz SLC', 'Mini Cooper',
    'Mini Cooper Clubman', 'Mini Cooper Countryman', 'Mitsubishi Eclipse Cross', 'Mitsubishi Mirage', 'Mitsubishi Outlander',
    'Nissan 370Z', 'Nissan Altima', 'Nissan Armada', 'Nissan Frontier', 'Nissan GT-R',
    'Nissan Juke', 'Nissan Leaf', 'Nissan Maxima', 'Nissan Murano', 'Nissan Pathfinder',
    'Nissan Rogue', 'Nissan Sentra', 'Nissan Titan', 'Nissan Versa', 'Nissan Xterra', 'Opel Astra', 'Opel Corsa', 'Opel Insignia', 'Pagani Huayra', 'Pagani Zonda',
    'Peugeot 208', 'Peugeot 308', 'Peugeot 508', 'Plymouth Barracuda', 'Pontiac Firebird',
    'Pontiac GTO', 'Porsche 718 Boxster', 'Porsche 718 Cayman', 'Porsche 911', 'Porsche Cayenne',
    'Porsche Macan', 'Porsche Panamera', 'Porsche Taycan', 'Ram 1500', 'Ram 2500',
    'Renault Clio', 'Renault Megane', 'Rolls-Royce Cullinan', 'Rolls-Royce Dawn', 'Rolls-Royce Ghost',
    'Rolls-Royce Phantom', 'Rolls-Royce Wraith', 'Saab 9-3', 'Saab 9-5', 'Saturn Sky',
    'Scion FR-S', 'Scion tC', 'Scion xB', 'Seat Ibiza', 'Seat Leon',
    'Skoda Fabia', 'Skoda Octavia', 'Skoda Superb', 'Smart Fortwo', 'Subaru BRZ',
    'Subaru Crosstrek', 'Subaru Forester', 'Subaru Impreza', 'Subaru Legacy', 'Subaru Outback',
    'Suzuki Swift', 'Suzuki Vitara', 'Tesla Model 3', 'Tesla Model S', 'Tesla Model X',
    'Tesla Model Y', 'Tesla Roadster', 'Toyota 4Runner', 'Toyota 86', 'Toyota Avalon',
    'Toyota C-HR', 'Toyota Camry', 'Toyota Corolla', 'Toyota FJ Cruiser', 'Toyota Highlander',
    'Toyota Land Cruiser', 'Toyota Prius', 'Toyota RAV4', 'Toyota Sequoia', 'Toyota Sienna',
    'Toyota Supra', 'Toyota Tacoma', 'Toyota Tundra', 'Toyota Yaris', 'Vauxhall Astra',
    'Vauxhall Corsa', 'Vauxhall Insignia', 'Volkswagen Atlas', 'Volkswagen Beetle', 'Volkswagen Golf',
    'Volkswagen Jetta', 'Volkswagen Passat', 'Volkswagen Polo', 'Volkswagen Tiguan', 'Volkswagen Touareg',
    'Volvo C30', 'Volvo S60', 'Volvo S90', 'Volvo V60', 'Volvo V90',
    'Volvo XC40', 'Volvo XC60', 'Volvo XC90', 'Wiesmann GT MF5', 'Zenvo ST1',
    // This pattern continues until the desired number of entries is reached
];
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