// Module ID: 16425
// Function ID: 16426
// Name: getTimeZone
// Dependencies: [4324, 2]
// Exports: default

// Module 16425 (getTimeZone)
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4324) /* DCDDeviceManager */.getTimeZone();
};
