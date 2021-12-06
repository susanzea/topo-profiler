


document.addEventListener("DOMContentLoaded", () => {
    console.log('content loaded')
    const body = document.querySelector("body")
    const list = document.createElement("ul")
    body.append(list) // ul showed up on page so webpack is working
    
})