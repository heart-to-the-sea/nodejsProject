import { Init } from "../../../utils/decorator";
import { WORK_THREAD } from "../../config";
import {isMainThread, Worker, MessageChannel} from "worker_threads"
import path from "path";
const { port1, port2 } = new MessageChannel();
//@ts-ignore
@Init(WORK_THREAD)
export default class {
    test(){
        console.log('work_thread');
        console.log("是否是主线程",isMainThread);

        this.run()
    }
    run() {
        const threadPath = path.resolve(__dirname,"./workThread.js");
        
        const worker = new Worker(threadPath)
        const subChannel = new MessageChannel();
        worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1])

        subChannel.port1.on("message",(yes)=>{
            console.log("接收通过parentPort发送的消息");
            console.log("yes")
        })
    }
}