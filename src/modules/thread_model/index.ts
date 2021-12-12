import { Init } from "../../utils/decorator";
import { THREAD } from "../config";
import { Test } from "../test.interface"
@Init(THREAD)
export default class Thread implements Test {
    test() {
        console.log('test thread')
        console.log("需要安装 threads a gogo 插件");
        
    }
}