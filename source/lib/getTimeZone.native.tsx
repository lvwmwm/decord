// Module ID: 16004
// Function ID: 123584
// Name: getTimeZone
// Dependencies: [4110, 2]
// Exports: default

// Module 16004 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4110) /* getSystemVersion */.getTimeZone();
};
