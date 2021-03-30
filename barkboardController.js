
require('dotenv').config()

//if (process.env.ENABLE_GPIO) {

	// Console Log 
	console.log('GPIO is enabled, button presses will raise events.')

	// Setup Hardware / Push Button
	var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
	const { exec } = require('child_process');

	// Pin 09 - Button 1
	var pin09 = new Gpio(09, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin09: ', pin09.readSync());
	pin09.watch(function (err, value) {
		playSound('outside');
		console.log('Pressed pin 09')
	});

	// Pin 10 - Button 2
	var pin10 = new Gpio(10, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin10: ', pin10.readSync());
	pin10.watch(function (err, value) {
		playSound('walk');
		console.log('Pressed pin 10')
	});

	// Pin 11 - Button 3
	var pin11 = new Gpio(11, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin11: ', pin11.readSync());
	pin11.watch(function (err, value) {
		playSound('eat');
		console.log('Pressed pin 11')
	});


	// Pin 16 - Button 4
	var pin16 = new Gpio(16, 'in', 'rising', { debounceTimeout: 16 });
	console.log('pin16: ', pin16.readSync());
	pin16.watch(function (err, value) {
		playSound('bed');
		console.log('Pressed pin 16')
	});

	// Pin 17 - Button 5
	var pin17 = new Gpio(17, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin17: ', pin17.readSync());
	pin17.watch(function (err, value) {
		playSound('tony');
		console.log('Pressed pin 17')
	});

	// Pin 18 - Button 6
	var pin18 = new Gpio(18, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin18: ', pin18.readSync());
	pin18.watch(function (err, value) {
		playSound('robin');
		console.log('Pressed pin 18')
	});

	// Pin 22 - Button 7
	var pin22 = new Gpio(22, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin22: ', pin22.readSync());
	pin22.watch(function (err, value) {
		playSound('brush');
		console.log('Pressed pin 22')
	});

	// Pin 24 - Button 8
	var pin24 = new Gpio(24, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin24: ', pin24.readSync());
	pin24.watch(function (err, value) {
		playSound('atticus');
		console.log('Pressed pin 24')
	});

	// Pin 25 - Button 9
	var pin25 = new Gpio(25, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin25: ', pin25.readSync());
	pin25.watch(function (err, value) {
		playSound('love');
		console.log('Pressed pin 25')
	});

	// Pin 26 - Button 10
	var pin26 = new Gpio(26, 'in', 'rising', { debounceTimeout: 15 });
	console.log('pin26: ', pin26.readSync());
	pin26.watch(function (err, value) {
		playSound('play');
		console.log('Pressed pin 26')
	});

	process.on('SIGINT', function () {
		pin09.unexport()
		pin10.unexport()
		pin11.unexport()
		pin16.unexport()
		pin17.unexport()
		pin18.unexport()
		pin22.unexport()
		pin24.unexport()
		pin25.unexport()
		pin26.unexport()

		process.exit();

	});

//}


function playSound(sound) {
	// omxplayer directly using child_process
	// exec('omxplayer --vol 9 /home/pi/puptalker/MP3s/pipe.wav');
	// exec('omxplayer --vol 2 /home/pi/puptalker/MP3s/pipe.wav');
	// exec('omxplayer --vol 2 /home/pi/puptalker/MP3s/outside.wav');

	// exec('omxplayer --vol 9 /home/pi/barkboard/wav/' + sound + '.wav');
	exec('omxplayer --vol 9 /opt/barkboard/wav/' + sound + '.wav');

	// aplay
	// player.play('/home/pi/puptalker/MP3s/pipe.wav', (err) => {
	// player.play('MP3s/outside.mp3', (err) => {

	// soundOutput.play('/home/pi/puptalker/MP3s/pipe.wav', (err) => {
	// if (err) console.log(`could not play sound: ${err}`);
};

