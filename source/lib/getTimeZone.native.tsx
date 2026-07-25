// Module ID: 16015
// Function ID: 123752
// Name: getTimeZone
// Dependencies: [4111, 2]
// Exports: default

// Module 16015 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4111) /* getSystemVersion */.getTimeZone();
};
