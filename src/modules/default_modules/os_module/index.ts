import os from 'os'
import { Init } from '../../../utils/decorator';
import { OS } from '../../config';

@Init(OS)
export default class { 
    test ()  {
        console.log('获取芯片架构', os.arch())
        console.log(os.cpus().map(item=>item.speed+'MHZ'));
        console.log(os.devNull);
        console.log('返回内存大小端',os.endianness());
        console.log('返回空闲内存',os.freemem()/1024/1024/8);
        console.log('返回当前进程优先级',os.getPriority());
        console.log('主机名',os.hostname());
        console.log('返回操作系统的平均负载数组，分别是1分钟5分钟 15分钟',os.loadavg());
        // console.log('返回网络接口对象',os.networkInterfaces());
        console.log('返回操作系统的平台字符串',os.platform());
        console.log('返回操作系统',os.release());
        console.log('返回操作系统默认的临时文件目录', os.tmpdir());
        console.log('操作系统内存总量', os.totalmem()/1024/1024/8);
        console.log('返回操作系统的运行时间，单位秒',os.uptime());
        console.log('返回操作系统的用户信息',os.userInfo());
        console.log('返回操作系统的内核版本',os.version());
        console.log('操作系统常量',os.constants);
    }
}