const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
        if (error) {
            return callback(error, null);
        } else if (response.statusCode === 404) {
            return callback('Breed not found', null);
        } else {
            const data = JSON.parse(body);
            if (data.length === 0) {
                return callback('Breed not found', null);
            } else {
                return callback(null, data[0].description.trim());
            }
        }
    });
};

module.exports = { fetchBreedDescription };
