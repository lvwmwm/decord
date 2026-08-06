// Module ID: 16240
// Function ID: 16241
// Name: getTimeZone
// Dependencies: [4265, 2]
// Exports: default

// Module 16240 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4265) /* DCDDeviceManager */.getTimeZone();
};
