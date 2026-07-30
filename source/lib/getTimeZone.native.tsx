// Module ID: 16095
// Function ID: 16096
// Name: getTimeZone
// Dependencies: [4169, 2]
// Exports: default

// Module 16095 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4169) /* DCDDeviceManager */.getTimeZone();
};
