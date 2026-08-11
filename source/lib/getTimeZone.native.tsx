// Module ID: 16368
// Function ID: 16369
// Name: getTimeZone
// Dependencies: [4283, 2]
// Exports: default

// Module 16368 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4283) /* DCDDeviceManager */.getTimeZone();
};
