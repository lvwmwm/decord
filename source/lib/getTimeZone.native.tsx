// Module ID: 16495
// Function ID: 16496
// Name: getTimeZone
// Dependencies: [4354, 2]
// Exports: default

// Module 16495 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4354) /* DCDDeviceManager */.getTimeZone();
};
