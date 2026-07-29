// Module ID: 16101
// Function ID: 16102
// Name: getTimeZone
// Dependencies: [4169, 2]
// Exports: default

// Module 16101 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4169) /* DCDDeviceManager */.getTimeZone();
};
