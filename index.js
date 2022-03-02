var events=require('events');
var eventEmitter=new events.EventEmitter();

var myEvent=function(){
    console.log("First");
}
var myEvent2=function(){
    console.log("First");
}
eventEmitter.on('laugh',myEvent);
eventEmitter.on('laugh',myEvent2);
eventEmitter.emit('laugh');
var eventListeners=eventEmitter.listenerCount('laugh');
console.log(eventListeners);
eventEmitter.removeListener('laugh',myEvent);
eventListeners=eventEmitter.listenerCount('laugh');
console.log(eventListeners);