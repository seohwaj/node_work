const process = require('process');
const os = require('os');
// import process from 'process';
// package.json에 "type": "module" 추가 후 사용 가능

process.on('beforeExit', (code) => {
  console.log('2. 이벤트 루프에 등록된 작업이 모두 종료된 후 노드 프로세스를 종료하기 직전: ',
    code);
});

process.on('exit', (code) => {
  console.log('3. 노드 프로세스가 종료될 때: ', code);
});

console.log('1. 콘솔에 출력되는 첫 번째 메시지');
// 프로세스 종료
// process.exit();
// 환경변수
// console.log(process.env);
console.log('hostname', os.hostname());
console.log('type', os.type())
console.log('homedir', os.homedir());

// end
console.log('username', process.env.USERNAME);