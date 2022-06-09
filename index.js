const spy = () => {
    console.log(`I see You`)
}


function receivesAFunction(callback){
    callback()
}

const namedFunction = returnsANamedFunction();

function returnsANamedFunction() {
    return function greeting() {
        return "Hello!"
    }
}
//take no arguments
//return a named function

const anonymousFunction = returnsAnAnonymousFunction();

function returnsAnAnonymousFunction() {
    return function () {
        return "Hello!" } }