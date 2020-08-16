var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventhandler = () => {
  console.log('I HEAR A SCREEEEAAAM!');
}

eventEmitter.on('scream', myEventhandler);

eventEmitter.emit('scream');
