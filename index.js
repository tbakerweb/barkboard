
// Setup Sound
const { exec, spawn } = require('child_process');
const path = require('path');

require('dotenv').config()

// var player = require('play-sound')(opts = {})
// var Sound = require('node-aplay');
// var soundOutput = new Sound();

// Setup Hardware / Push Button
//if(process.env.ENABLE_GPIO){
console.log('GPIO is enabled');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//}

// Build API Http Interface using Express
const express = require('express');
let bodyParser = require('body-parser');
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const barkboardRouter = require('./routes/barkboard')
app.use('/barkboard', barkboardRouter);

// Start Application
app.listen(3088, () => console.log('Barkboard API Started'));

// Launch the onboard Controller to listen for button presses and sound plaing
const barkboardControllerJs = path.join(__dirname, 'barkboardController.js');
const barkboard = spawn('node', [barkboardControllerJs]);

console.log('running');
