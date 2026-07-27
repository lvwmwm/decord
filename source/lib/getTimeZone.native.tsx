// Module ID: 16027
// Function ID: 123799
// Name: getTimeZone
// Dependencies: [4111, 2]
// Exports: default

// Module 16027 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4111) /* getSystemVersion */.getTimeZone();
};
