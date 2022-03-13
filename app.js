
// Test Node.js module system
const Logger = require('./logger'); // or ./logger.js
const logger = new Logger();

// Register a listener (or use "addListener")
logger.on('messageLogged', (arg) => {
    console.log('Listener called.', arg.id + ', ' + arg.url);
});

logger.log('logger', logger);
logger.showModule();

// Test default built modules
// Path
const path = require('path');
var pathObj = path.parse(__filename);
logger.log('pathObj', pathObj);

// OS
const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();
logger.log('totalMem', totalMem);
logger.log('freeMem', freeMem);

// File, prefer to use asynchronous funtion (have callback function)
const fs = require('fs');
fs.readdir('./', function (err, files) {
    if (err) logger.log('Error', err);
    else logger.log('Result', files);
});

// Http (call http://localhost:3000/)
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify({ 'test': [1, 2, 3] }));
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000...');

// Event (way 1)
// const EventEmitter = require('events'); // is a class
// const emitter = new EventEmitter(); // create object
// emitter.on('messageLogged', (arg) => {
//     logger.log('Listener called.', arg.id + ', ' + arg.url);
// }); // register a listener (or addListener)
// emitter.emit('messageLogged', { id: 1, url: 'http://' }); // raise an event

// Event (way 2, change logger to a event class, see "logger.js")