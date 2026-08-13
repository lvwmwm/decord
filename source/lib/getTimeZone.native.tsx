// Module ID: 16436
// Function ID: 16437
// Name: getTimeZone
// Dependencies: [4322, 2]
// Exports: default

// Module 16436 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4322) /* DCDDeviceManager */.getTimeZone();
};
