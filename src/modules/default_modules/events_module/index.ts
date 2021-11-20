import Event from 'events'
import { EventEmitter } from 'stream'
import { Init } from '../../../utils/decorator';
import { EVENT } from '../../config';

@Init(EVENT)
export default class{
  test () {
    console.log('events模块');
    class MyEvent extends Event {
    }
    const myEvent  = new MyEvent()
    // 注册监听器
    myEvent.on('eventName',function() {
      console.log(arguments);
    })
    myEvent.emit('eventName','a','b')
  }
}