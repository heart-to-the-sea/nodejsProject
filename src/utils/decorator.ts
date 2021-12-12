export function Init(flag:boolean) {
    return function (target:any){
        target.prototype.isRun = flag
    }
}