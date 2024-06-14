const myURL = new URL('http://example.org:8080/foo?username=choi#bar');
// console.log(myURL);
console.log(myURL.searchParams.get("username"));