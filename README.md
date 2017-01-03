# RaspberryPiAlexaAI
To control lights and appliances with amazon echo {Voice Control}

Project is divided into 3 parts:
#Node js server to listen http request
   RaspberrApp.js

#Alexa skill set and aws lamda function to process the voice command 
  RaspberryLamda.js

# using NPM Package Local tunnel
  To expose local host to internet where your web server is hosted
  NPM command: lt --port {port number} --subdomain {example}
  It returns a public address to be accesed over internet https://example.localtunnel.me
