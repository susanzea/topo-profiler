// //this file will be used for backend server
// import dotenv from 'dotenv';
// dotenv.config();


// //////////////////// SERVER AUTH CODE ///////////////////////


// // Require client library and private key.
// import ee from '@google/earthengine';
// export const privateKey = process.env.API_KEY;


// // Initialize client library and run analysis.
// var runAnalysis = function () {
//     ee.initialize(null, null, function () {
//         // ... run analysis ...
//     }, function (e) {
//         console.error('Initialization error: ' + e);
//     });
// };
// ``

// // Authenticate using a service account.
// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
//     console.error('Authentication error: ' + e);
// });

// ////////////////////////////////////////////////////////





///////// copied from AAO Server Setup ////////////

// const express = require('express'); // web framework
// // const fetch = require('node-fetch'); // for making AJAX requests
// const path = require('path');

// require('dotenv').config();

// var ee = require('@google/earthengine');

// // put environmental variables defined in .env file on process.env
// // console.log(process.env.API_KEY === "banana");

// const app = express();

// // serve files / assets from the dist folder
// app.use(express.static('dist'));

// // in response to `GET /` requests, send the file `dist/index.html`
// app.get('/', (request, response) => {
//     console.log("I'm in route");
//     response.sendFile(`${__dirname}/dist/index.html`);
// });

// app.get('/authenticate', (request, response) => {
//     response.send("in authenticate")

    // Authenticate using one (but not both) of the methods below.
    // ee.data.authenticateViaOauth(YOUR_CLIENT_ID);
    // ee.data.authenticateViaPrivateKey(process.env.API_KEY);
    // Initialize client library and run analysis.
    // var runAnalysis = function () {
    //     ee.initialize(null, null, function () {
    //         // ... run analysis ...
    //     }, function (e) {
    //         console.error('Initialization error: ' + e);
    //     });
    // };
    // debugger
    // // Authenticate using a service account.
    // ee.data.authenticateViaPrivateKey(process.env.API_KEY, runAnalysis, function (e) {
    //     console.error('Authentication error: ' + e);
    // });
    // response.send("authentication complete");

    // Run an Earth Engine script.
    // var image = new ee.Image('srtm90_v4');
    // image.getMap({ min: 0, max: 1000 }, function (map) {
    //     console.log(map);
    // });

// });
// // Heroku sets process.env.PORT in production; use 8000 in dev
// const PORT = process.env.PORT || 8000;
// // start up a server listening at PORT; on success, log a message
// app.listen(PORT, () => {
//     console.log(`Listening at localhost:${PORT}`);
// });

/////////////////////////////////////////////////////

/////////////// also copied from AAO server setup //////////////

// `GET /cors` requests trigger this callback (like controller action)
// `request` object contains request's query string, wildcard params, etc
// `response` object has `send` method for sending our server response
// app.get('/cors', (request, response) => {
//     console.log(`Fetching: ${request.query.url}`);

//     fetch(request.query.url) // AJAX request to URL provided in query string
//         .then(apiResponse => apiResponse.json()) // parse response as JSON
//         .then(data => response.send(data)) // send parsed data to frontend
//         .catch(error => response.send(error));
// });


// app.get('/api', (request, response) => {
//     const urlStart = 'https://www.themealdb.com/api/json/v1';
//     const apiKey = process.env.API_KEY; // from .env (dev) or Heroku
//     const searchTerm = request.query.searchTerm; // from query string
//     const url = `${urlStart}/${apiKey}/search.php?s=${searchTerm}`;

//     console.log(`Fetching: ${url}`);

//     fetch(url) // AJAX request to API
//         .then(apiResponse => apiResponse.json())
//         .then(data => response.send(data))
//         .catch(error => response.send(error));
// });

// app.get('/authenticate', (request, response) => {
//     // console.log('authenticating...')
//     // import ee from '@google/earthengine';
//     // export const privateKey = process.env.API_KEY;


//     // // Initialize client library and run analysis.
//     // var runAnalysis = function () {
//     //     ee.initialize(null, null, function () {
//     //         // ... run analysis ...
//     //     }, function (e) {
//     //         console.error('Initialization error: ' + e);
//     //     });
//     // };

//     // // Authenticate using a service account.
//     // ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
//     //     console.error('Authentication error: ' + e);
//     // });
//     response.send('hi');
// })



// //////////////////////////////////////////////////////


// // Heroku sets process.env.PORT in production; use 8000 in dev
// const PORT = process.env.PORT || 8000;
// // start up a server listening at PORT; on success, log a message
// app.listen(PORT, () => {
//     console.log(`Listening at localhost:${PORT}`);
// });