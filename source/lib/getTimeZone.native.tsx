// Module ID: 15957
// Function ID: 123262
// Name: getTimeZone
// Dependencies: [4110, 2]
// Exports: default

// Module 15957 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4110) /* getSystemVersion */.getTimeZone();
};
