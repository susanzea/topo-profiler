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

        //hide homepage code
        const homepageDiv = document.getElementsByClassName("homepage")[0]
        console.log(homepageDiv)
        homepageDiv.style.display = "none"

        //show map page code
        const mapPageDiv = document.getElementsByClassName("map-page")[0]
        console.log(mapPageDiv)
        mapPageDiv.style.display = "flex"
    })

    const yosemiteButton = document.getElementById("yosemite-button")
    yosemiteButton.addEventListener("click", () => {
        console.log("yosemite clicked")

        //hide homepage code
        const homepageDiv = document.getElementsByClassName("homepage")[0]
        console.log(homepageDiv)
        homepageDiv.style.display = "none"

        //show map page code
        const mapPageDiv = document.getElementsByClassName("map-page")[0]
        console.log(mapPageDiv)
        mapPageDiv.style.display = "flex"
    })
    
    const mojavesButton = document.getElementById("mojaves-button")
    mojavesButton.addEventListener("click", () => {
        console.log("mojaves clicked")

        //hide homepage code
        const homepageDiv = document.getElementsByClassName("homepage")[0]
        console.log(homepageDiv)
        homepageDiv.style.display = "none"

        //show map page code
        const mapPageDiv = document.getElementsByClassName("map-page")[0]
        console.log(mapPageDiv)
        mapPageDiv.style.display = "flex"
    })

    const infoButton = document.getElementById("info-button")
    infoButton.addEventListener("click", () => {
        console.log("info clicked")

        //hide homepage code
        const homepageDiv = document.getElementsByClassName("homepage")[0]
        console.log(homepageDiv)
        homepageDiv.style.display = "none"

        //show map page code
        const topoIntroPageDiv = document.getElementsByClassName("edu-page")[0]
        console.log(topoIntroPageDiv)
        topoIntroPageDiv.style.display = "flex"
    })

    // const locInput = document.getElementById("custom-loc-input")
    // infoButton.addEventListener("click", () => {
    //     console.log("custom loc input box clicked")

    //     topoIntroPageDiv.style.value = ""
    // })
    
})














// Authenticate using one (but not both) of the methods below.
// ee.data.authenticateViaOauth(YOUR_CLIENT_ID);


// ee.initialize();

// Run an Earth Engine script.
// var image = new ee.Image('srtm90_v4');
// image.getMap({ min: 0, max: 1000 }, function (map) {
//     console.log(map);
// });
