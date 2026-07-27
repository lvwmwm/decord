// Module ID: 5903
// Function ID: 52385
// Name: getMediaPerformanceClass
// Dependencies: [4111, 2]
// Exports: default

// Module 5903 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4111) /* getSystemVersion */.getDeviceMediaPerformanceClass();
};
