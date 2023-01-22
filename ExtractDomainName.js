// Write a function that when given a URL as a string, parses out just the domain name 
// and returns it as a string.

// Examples:
// url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// url = "https://www.cnet.com"                -> domain name = cnet"

// Expected: google
console.log(domainName("http://google.com"));
// Expected: google
console.log(domainName("http://google.co.jp"));
// Expected: xaker
console.log(domainName("www.xakep.ru"));
// Expected: youtube
console.log(domainName("https://youtube.com"));
// Expected: x08r8zkfz82cb2
console.log(domainName("x08r8zkfz82cb2.pro"));
// Expected: m1jv7tw4s-f
console.log(domainName("m1jv7tw4s-f.jp"));

function domainName(url){
    if (url.includes('www.')) {
        res = url.substring(url.indexOf('.') + 1);
        return res.substring(0, res.indexOf('.'));
    }

    if (url.includes('://')) {
        res = url.substring(url.indexOf('://') + 3);
        return res.substring(0, res.indexOf('.'))
    }

    return url.substring(0, url.indexOf('.'));
}