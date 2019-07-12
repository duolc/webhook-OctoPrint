# webhook-OctoPrint
Triggers Notification and shutdown of printer

Install node, and npm

Clone Repo and enter directory

Install Dependencies
  -request
  
Add your ifttt API key to line 5


Add the following to the end of your config.yaml located at /home/pi/.octoprint

event:
 enabled: True
 subscriptions:
  - event: PrintDone
    command: node ~/{{Script Location}}/finished.js
    type: system

