var id=Math.random();
var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();

client.on('connectFailed',function(error){console.log('conn error: '+error.toString());});
client.on('connect', function(connection){

	console.log('connected');

	connection.on('error', function(cerr){console.log(cerr);});
	connection.on('close', function(data){console.log(data);});
	connection.on('message', function(data){console.log(data);});

	function sendData(){
		if(connection.connected){
			var number= Math.round(Math.random() * 0xFFFFFF);
			connection.sendUTF('aaa'+number.toString());
			setTimeout(sendNumber, 100);
		}
	}
	sendData();
});

//console.log(client);

client.connect('ws://challs.campctf.ccc.ac:10116','q');

