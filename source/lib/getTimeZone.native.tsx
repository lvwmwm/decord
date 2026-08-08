// Module ID: 16343
// Function ID: 16344
// Name: getTimeZone
// Dependencies: [4283, 2]
// Exports: default

// Module 16343 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4283) /* DCDDeviceManager */.getTimeZone();
};
