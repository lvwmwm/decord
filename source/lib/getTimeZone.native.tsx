// Module ID: 16266
// Function ID: 16267
// Name: getTimeZone
// Dependencies: [4282, 2]
// Exports: default

// Module 16266 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4282) /* DCDDeviceManager */.getTimeZone();
};
