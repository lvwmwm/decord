// Module ID: 16187
// Function ID: 16188
// Name: getTimeZone
// Dependencies: [4235, 2]
// Exports: default

// Module 16187 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4235) /* DCDDeviceManager */.getTimeZone();
};
