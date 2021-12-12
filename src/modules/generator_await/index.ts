import { Init } from "../../utils/decorator";
import { GENERATOR_AWAIT } from "../config";
import { Test } from "../test.interface";

@Init(GENERATOR_AWAIT)
export default class GeneratorAwait implements Test{
  test(): void {
    console.log('生成器实现 await');
  }

}