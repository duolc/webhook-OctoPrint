#!/usr/bin/env node

var request = require('request')

var iftttKey = '/with/key/'+'{{Your IFTTT API key}}';

var iftttLink = 'https://maker.ifttt.com/trigger/';


function finishAlert() {
        request.post(iftttLink+'printDone'+iftttKey);
}

function shutdownPrinter() {
        request.post(iftttLink+'shutdownMK3'+iftttKey);
}

//Execute

finishAlert();
//Shutdown after 10 Min (Allows for cooling of hotend and heatbreak)
setTimeout(shutdownPrinter, 600000);
