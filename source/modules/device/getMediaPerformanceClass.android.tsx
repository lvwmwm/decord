// Module ID: 5937
// Function ID: 52504
// Name: getMediaPerformanceClass
// Dependencies: [4145, 2]
// Exports: default

// Module 5937 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4145) /* getSystemVersion */.getDeviceMediaPerformanceClass();
};
