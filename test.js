var async = require('async');

var BBCMicrobit = require('./index');

BBCMicrobit.discover(function(microbit) {
  console.log('discovered ' + microbit);

  microbit.on('disconnect', function() {
    console.log('disconnected!');
    process.exit(0);
  });

  microbit.on('temperatureChange', function(temperature) {
    console.log('\ton -> temperature change: temperature = %d °C', temperature);
  });

  microbit.on('accelerometerChange', function(x, y, z) {
    console.log('\ton -> accelerometer change: accelerometer = %d %d %d G', x.toFixed(1), y.toFixed(1), z.toFixed(1));
  });

  microbit.on('magnetometerChange', function(x, y, z) {
    console.log('\ton -> magnetometer change: magnetometer = %d %d %d', x.toFixed(1), y.toFixed(1), z.toFixed(1));
  });

  microbit.on('magnetometerBearingChange', function(bearing) {
    console.log('\ton -> magnetometer bearing change: magnetometer bearing = %d', bearing);
  });

  async.series([
    function(callback) {
      console.log('connectAndSetUp');
      microbit.connectAndSetUp(callback);
    },
    function(callback) {
      console.log('readDeviceName');
      microbit.readDeviceName(function(error, deviceName) {
        console.log('\tdevice name = ' + deviceName);
        callback();
      });
    },
    function(callback) {
      console.log('readModelNumber');
      microbit.readModelNumber(function(error, modelNumber) {
        console.log('\tmodel number = ' + modelNumber);
        callback();
      });
    },
    function(callback) {
      console.log('readSerialNumber');
      microbit.readSerialNumber(function(error, serialNumber) {
        console.log('\tserial number = ' + serialNumber);
        callback();
      });
    },
    function(callback) {
      console.log('readFirmwareRevision');
      microbit.readFirmwareRevision(function(error, firmwareRevision) {
        console.log('\tfirmware revision = ' + firmwareRevision);
        callback();
      });
    },
    function(callback) {
      console.log('writeTemperaturePeriod');
      microbit.writeTemperaturePeriod(100, callback);
    },
    function(callback) {
      console.log('readTemperaturePeriod');
      microbit.readTemperaturePeriod(function(error, period) {
        console.log('\ttemperature period = %d ms', period);
        callback();
      });
    },
    function(callback) {
      console.log('readTemperature');
      microbit.readTemperature(function(error, temperature) {
        console.log('\ttemperature = %d °C', temperature);
        callback();
      });
    },
    function(callback) {
      console.log('subscribeTemperature');
      microbit.subscribeTemperature(callback);
    },
    function(callback) {
      setTimeout(callback, 5000);
    },
    function(callback) {
      console.log('unsubscribeTemperature');
      microbit.unsubscribeTemperature(callback);
    },
    function(callback) {
      console.log('writeAccelerometerPeriod');
      microbit.writeAccelerometerPeriod(640, callback);
    },
    function(callback) {
      console.log('readAccelerometerPeriod');
      microbit.readAccelerometerPeriod(function(error, period) {
        console.log('\taccelerometer period = %d ms', period);
        callback();
      });
    },
    function(callback) {
      console.log('readAccelerometer');
      microbit.readAccelerometer(function(error, x, y, z) {
        console.log('\taccelerometer = %d %d %d G', x.toFixed(1), y.toFixed(1), z.toFixed(1));
        callback();
      });
    },
    function(callback) {
      console.log('subscribeAccelerometer');
      microbit.subscribeAccelerometer(callback);
    },
    function(callback) {
      setTimeout(callback, 5000);
    },
    function(callback) {
      console.log('unsubscribeAccelerometer');
      microbit.unsubscribeAccelerometer(callback);
    },
    function(callback) {
      console.log('writeMagnetometerPeriod');
      microbit.writeMagnetometerPeriod(640, callback);
    },
    function(callback) {
      console.log('readMagnetometerPeriod');
      microbit.readMagnetometerPeriod(function(error, period) {
        console.log('\tmagnetometer period = %d ms', period);
        callback();
      });
    },
    // function(callback) {
    //   console.log('readMagnetometer');
    //   microbit.readMagnetometer(function(error, x, y, z) {
    //     console.log('\tmagnetometer = %d %d %d', x.toFixed(1), y.toFixed(1), z.toFixed(1));
    //     callback();
    //   });
    // },
    function(callback) {
      console.log('subscribeMagnetometer');
      microbit.subscribeMagnetometer(callback);
    },
    function(callback) {
      setTimeout(callback, 5000);
    },
    function(callback) {
      console.log('unsubscribeMagnetometer');
      microbit.unsubscribeMagnetometer(callback);
    },
    // function(callback) {
    //   console.log('readMagnetometerBearing');
    //   microbit.readMagnetometerBearing(function(error, bearing) {
    //     console.log('\tmagnetometer bearing = %d', bearing);
    //     callback();
    //   });
    // },
    function(callback) {
      console.log('subscribeMagnetometerBearing');
      microbit.subscribeMagnetometerBearing(callback);
    },
    function(callback) {
      setTimeout(callback, 5000);
    },
    function(callback) {
      console.log('unsubscribeMagnetometerBearing');
      microbit.unsubscribeMagnetometerBearing(callback);
    },
    function(callback) {
      console.log('disconnect');
      microbit.disconnect(callback);
    }
  ]);
});
