//console.log('Hello URL Validator!');

//How to use the url Constructor to Validate urls

const gurl = new URL("https://www.github.com");
//const gurl = new URL("github.com"); // TypeError
console.log(gurl);


function isValidUrl(url){
    try{
        const urlObject = new URL(url);
        return urlObject.protocol;
    }catch(err){
        return false;
    }
}

console.log(isValidUrl("https://github.com")); //https:
console.log(isValidUrl("mailto://mail@github.com")); //mailto:
console.log(isValidUrl("github")); //false

function isValidHttpUrl(url){
    try{
        const validUrl = new URL(url);
        return validUrl.protocol === 'http:' || validUrl.protocol === 'https:';
    }catch(err){
        return false;
    }
}

console.log(isValidHttpUrl("https://github.com"));
console.log(isValidHttpUrl("mailto://mail@github.com"));
console.log(isValidHttpUrl("github"));