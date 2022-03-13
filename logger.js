
// // Module basic info
// console.log('__filename', __filename);
// console.log('__dirname', __dirname);
// console.log('exports', exports);
// console.log('require', require);
// console.log('module', module);

const url = "http://mylogger.io/log"; // private

const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(funcName, object) {
        console.log(funcName + ': ');
        console.log(object);
        console.log();

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }

    showModule() { // See module compoenet
        console.log(module);
    }
}

// Test Node.js module system
module.exports = Logger;
// module.exports.log = log;
// module.exports.showModule = showModule;