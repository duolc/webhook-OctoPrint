#!/usr/bin/env node

var request = require('request')

var iftttKey = '/with/key/'+'{{Your IFTTT API key}}';
var iftttLink = 'https://maker.ifttt.com/trigger/';

//Shutdown Calculation (Allow time for cooling of hotend and heatbreak)

var cooldownDelay = ;//Time in Minutes you want to wait for power cut
var shutdownTime = cooldownDelay * 60000;

function finishAlert() {
        request.post(iftttLink+'printDone'+iftttKey);
}

function shutdownPrinter() {
        request.post(iftttLink+'shutdownMK3'+iftttKey);
}

//Execute

finishAlert();
setTimeout(shutdownPrinter, shutdownTime);
