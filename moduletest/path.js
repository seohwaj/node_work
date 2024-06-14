const path = require('path');

// 현재 파일의 절대 경로
console.log(__filename);

// 확장자
console.log(path.extname(__filename));
console.log(path.extname('index.html'));

// 폴더 경로
console.log(path.dirname(__filename));

console.log(path.join('/temp', 'upload', 'abc.txt'));
let file = path.parse('/temp/upload/abc.txt');
console.log(file);