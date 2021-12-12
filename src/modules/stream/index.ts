import fs from "fs";
import path from "path";
import Stream, { Readable, Writable } from "stream";
import { buffer } from "stream/consumers";
import { Init } from "../../utils/decorator";
import { STREAM } from "../config";
import { Test } from "../test.interface";
@Init(STREAM)
export default class StreamEduent implements Test {
  test(): void {
    console.log(`stream
                    pipe 可以以读取流或写入流处理，读取流只能放在起始的位置
                `);
    this.testFileStream();

    this.testReadStream();
  }
  testFileStream() {
    const fileRead = fs.createReadStream(path.resolve(__dirname, "./a.txt"));
    fileRead.on("data", (s) => {
      console.log("file Reader");

      console.log(s);
    });
    const fileWrite = fs.createWriteStream(path.resolve(__dirname, "./b.txt"));
    setInterval(() => {
      fileWrite.write("1111\r\n");
    }, 200);
    fileWrite.close();
    // 实现简单复制，将读取到的a.txt的内容 写入到b.txt
    const myWStream = new MyWStream();
    const myRStream = new MyRStream();
    console.log(myWStream.pipe);
    fileRead.pipe(myWStream).pipe(fileWrite);
    myRStream.pipe(fileWrite);
  }
  testReadStream() {
    const readStream = new MyRStream();
    readStream.on("data", (data) => {
      console.log("read data ", data);
    });
  }
}
// 自定义的stream流
class MyWStream extends Writable {
  constructor() {
    super();
  }
  _write(code: any, encode?: any, callback?: any): any {
    console.log("自定义写入流：", code.toString("utf8"));
    if (typeof encode === "string") {
      console.log(true);
    }
    callback();
  }
}
class MyRStream extends Readable {
  index = 0;
  constructor() {
    super();
  }
  _read(): any {
    console.log("自定义读取流：");
    this.index++;
    this.push(this.index + "");
    if (this.index === 3) {
      // 如果push null 会自动终止读取
      this.push(null);
    }
  }
}
