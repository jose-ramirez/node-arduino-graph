var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    moment = require('moment'),
    SerialPort = require('serialport'),
    readlineParser = require('@serialport/parser-readline'),
    portIdentifier = (process.platform === 'win32') ? 'COM4' : '/dev/ttyACM0';

var mySerial = new SerialPort(portIdentifier, {
    baudRate: 9600,
    parser: new readlineParser("\n")
});

mySerial.on('open', function () {
    console.log('conexão serial estabelecida!');
});

mySerial.on('data', function (data) {
    console.log(data)
    io.emit("dadosArduino",
        {
            valor: data,
            lbl: moment().format()
        });
});

io.on('connection', function () {
    console.log('conexão io estabelecida!');
});

app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile('index.html');
});

var porta = '3001';

http.listen(porta, function () {
    console.log('servidor escutando na porta ' + porta + '!');
});
