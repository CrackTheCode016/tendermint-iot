# Tendermint IoT PoC
<hr>
Track the temperature and humidty of a situation on a Tendermint blockchain.  This blockchain was written in Node.js using the Lotion module.  It allows for an embedded device to send sensor information directly to the blockchain via a simple HTTP REST request.  
<h2>A quick example showing an Angular front end displaying data from the Tendermint blockchan</h2>
<hr>
<img src="https://image.ibb.co/hPiDQp/photo_2018_05_25_13_17_49.jpg">


# Parts used

 - Arduino Uno
 - HC-05 Bluetooth Module
 - DHT11 temperature and humidity sensor
 
 An Android app was written to parse Bluetooth data feed from the HC-05.  THis app then sent the data to the Tendermint blockchain.  This isn't as direct as I would've liked, I am working on another version with NEM.
