// Module ID: 16066
// Function ID: 123955
// Name: getTimeZone
// Dependencies: [4145, 2]
// Exports: default

// Module 16066 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4145) /* getSystemVersion */.getTimeZone();
};
