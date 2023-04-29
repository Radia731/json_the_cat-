const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
        console.log(`Failed to connect to API: ${error}`);
    } else if (response.statusCode === 404) {
        console.log('Breed not found');
    } else {
        const data = JSON.parse(body);
        console.log(data[0].description);
        console.log(typeof data);
    }
});
