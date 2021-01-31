A graph to show data coming from a serial port.

Currently, it's hardcoded for the Arduino Uno default port, and it's intended to show the last 5 data points coming from the port to avoid cluttering the screen.

## TODOs
The graph isn't updating correctly, since it isn't updating the graph for values > 1. Will fix that eventually.

## How to run (as it is now)
 - Make sure you have an Arduino Uno sending data to the serial port. This project has a sample program which outputs random numbers to the port.
 - Run `node server.js`. The graph will be shown in [localhost:3001](localhost:3001).

## Troubleshooting
With the given instructions, it should just work; in case it doesn't:
 - Check you have access to the serial port. In some linux distros (Elementary OS, for instance), you don't have access to `ttyACM0` by default. [Here](https://playground.arduino.cc/Linux/All/#Permission) is a good place to check everything is ok with the serial port.