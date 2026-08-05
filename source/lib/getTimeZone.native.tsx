// Module ID: 16200
// Function ID: 16201
// Name: getTimeZone
// Dependencies: [4235, 2]
// Exports: default

// Module 16200 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4235) /* DCDDeviceManager */.getTimeZone();
};
