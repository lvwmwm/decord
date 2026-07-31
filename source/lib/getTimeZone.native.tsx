// Module ID: 16123
// Function ID: 16124
// Name: getTimeZone
// Dependencies: [4173, 2]
// Exports: default

// Module 16123 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4173) /* DCDDeviceManager */.getTimeZone();
};
