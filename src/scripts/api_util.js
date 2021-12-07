// export const Test = {test: console.log('test')}

export const authenticate = function () {
    fetch('/authenticate').then((response) => {
        debugger
        console.log(response);
    })
}