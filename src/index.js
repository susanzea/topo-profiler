// import Test from './scripts/test.js'
// import ee from '@google/earthengine';
// import {authenticate} from './scripts/api_util.js';
// import privateKey from '../app.js';

// window.ee = ee;
// window.authenticate = authenticate;

document.addEventListener("DOMContentLoaded", () => {
    console.log('content loaded')
    const body = document.querySelector("body")
    const list = document.createElement("ul")
    body.append(list) // ul showed up on page so webpack is working
    // const test = authenticate();
    // window.test = test;

    // ee.data.authenticateViaPrivateKey(privateKey);
    // const image = new ee.Image('srtm90_v4');
    // image.getMap({ min: 0, max: 1000 }, function (map) {
    //     console.log(map);
    // });
    
    const catalinaButton = document.getElementById("catalina-button")

    catalinaButton.addEventListener("click", () => {
        console.log("catalina clicked")

        //change homepage to hidden
        const homepageDiv = document.getElementsByClassName("homepage")
        homepageDiv.getAttribute("class")
        // homepageDiv.setAttribute('visibility', 'hidden');
        //change map page to visible

    })
    
    
})














// Authenticate using one (but not both) of the methods below.
// ee.data.authenticateViaOauth(YOUR_CLIENT_ID);


// ee.initialize();

// Run an Earth Engine script.
// var image = new ee.Image('srtm90_v4');
// image.getMap({ min: 0, max: 1000 }, function (map) {
//     console.log(map);
// });
