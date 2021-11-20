import { Init } from "../../../utils/decorator";
import { SQL_GENERATOR } from "../../config";
import {xml2js} from "xml-js"
import { readFileSync } from "fs";
import { resolve } from "path";
@Init(SQL_GENERATOR)
export default class {
    test (){
        console.log("mysql")
        const sql:any = this.xmlToJS(resolve(__dirname,"./sql/index.xml"))
        console.log(sql.xml.select._attributes.id);
    }
    xmlToJS (src:string){
        return xml2js(readFileSync(src,"utf-8"),{compact:true})
    }
}