// Module ID: 16445
// Function ID: 16446
// Name: getTimeZone
// Dependencies: [4322, 2]
// Exports: default

// Module 16445 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4322) /* DCDDeviceManager */.getTimeZone();
};
