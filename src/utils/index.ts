import { V4MAPPED } from "dns";
import fs from "fs";
import { resolve } from "path";
import { isFunctionTypeNode } from "typescript";
import { isFunction, isObject } from "util";
import vm from 'vm'
// 判断是否是文件夹
export function isFile(path: string) {
  return new Promise((res) => {
    try {        
      fs.lstat(path, (err, stat) => {
        if (err) {
          console.error(err);
          return res(false);
        }
        if (stat.isFile()) {
          res(true);
        } else {
          res(false);
        }
      });
    } catch (e) {
      console.error(e);
      return res(false);
    }
  });
}
// 运行node模块
export function runCode2 (script : string): void {
    const { test } = require(script)
    if(test) {
        test()
    }
}
// 实现通过注解进行解析的node模块
export function runCode (script : string): void {
  const Test = require(script)  
  try {
    if (isFunction(Test.test)) {
      Test.test()
    } else if (isFunction(Test.default)){
      const testObj = new Test.default()
      if(testObj?.test){

        if (!testObj.isRun){
          return
        }
        testObj.test()
      } else if (isFunction(Test)) {
        Test()
      }
    }
  }
  catch (e){
    console.error(e);
  }
}

export /**
* 运行模块
* @param modulePath 模块路径
*/
async function readFile (path: string) {   
   const modules = fs.readdirSync(path)
   for (const item of modules){
       const modulePath = resolve(path,item)
       if (await isFile(modulePath)) {
         if (!/\.ts$/.test(item)) {
           continue
          }
        // console.log(modulePath);
        runCode(modulePath)
       } else {
           await readFile(modulePath)
       }
   }
}