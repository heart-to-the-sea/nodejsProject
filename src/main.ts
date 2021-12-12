import {resolve, } from 'path'
import fs from 'fs'
import { readFile } from './utils';

const basePath = resolve(__dirname)



async function main () {
    const path = resolve(basePath,'./modules')
    readFile(path)
    
}

main()