# json_the_cat-

how to fetch data from the API endpoint using the request package in Node.js.

First, we import the request package and get the breed name from the command-line arguments using process.argv[2].

Then, we make a GET request to the API endpoint with the breed name as a query parameter using the request function.

The request function takes a callback function with three arguments: error, response, and body.

If there's an error, we log an error message to the console. If the response status code is 404 (not found), we log a message indicating that the breed was not found.

Otherwise, we parse the JSON string in the body and log the resulting object to the console, along with its type.

Note that the request package has been deprecated, and it's recommended to use axios or node-fetch instead.