const {isMainThread,parentPort,MessageChannel} = require("worker_threads")
const {port1} = new MessageChannel()
console.log(isMainThread);
// let i = 100000000
// while(i){
//     i--;
// }
console.log(parentPort.hereIsYourPort);
parentPort.emit("message")
