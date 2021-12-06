// import Test from './scripts/test.js'
import ee from '@google/earthengine';
// import privateKey from '../app.js';

window.ee = ee;

document.addEventListener("DOMContentLoaded", () => {
    console.log('content loaded')
    const body = document.querySelector("body")
    const list = document.createElement("ul")
    body.append(list) // ul showed up on page so webpack is working
    
    // ee.data.authenticateViaPrivateKey(privateKey);
    // const image = new ee.Image('srtm90_v4');
    // image.getMap({ min: 0, max: 1000 }, function (map) {
    //     console.log(map);
    // });
    
})


// Authenticate using one (but not both) of the methods below.
// ee.data.authenticateViaOauth(YOUR_CLIENT_ID);


// ee.initialize();

// Run an Earth Engine script.
// var image = new ee.Image('srtm90_v4');
// image.getMap({ min: 0, max: 1000 }, function (map) {
//     console.log(map);
// });
