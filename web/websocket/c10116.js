var id=Math.random();
var socket = require('socket.io-client')('ws://challs.campctf.ccc.ac/q');
socket.on('connect', function(){
	console.log('client: connect '+id);
//	socket.emit('helo','client:'+id);
	});
socket.on('tick', function(data) {
	console.log('client:'+id+' tick '+ data);
	});
socket.on('data', function(data) {
	console.log('client:'+id+' data '+ JSON.stringify(data));
	});
socket.on('event', function(data){
	console.log('client:'+id+' event '+ JSON.stringify(data));
	});
socket.on('disconnect', function(){
	console.log('client: disconnect');
	});

