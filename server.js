var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    moment = require('moment'),
    SerialPort = require('serialport'),
    //portIdentifier = 'COM3';
    portIdentifier = '/dev/ttyACM0';

var mySerial = new SerialPort(portIdentifier, {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

mySerial.on('open', function(){
  console.log('conexão serial estabelecida!');
});

mySerial.on('data', function(data){
  io.emit("dadosArduino",
  {
    valor: data,
    lbl: moment().format()
  });
});

io.on('connection', function(){
  console.log('conexão io estabelecida!');
});

app.use(express.static(__dirname));
app.get('/', function(req, res){
  res.sendFile('index.html');
});

http.listen('3000', function(){
  console.log('servidor escutando na porta 3000!');
});
