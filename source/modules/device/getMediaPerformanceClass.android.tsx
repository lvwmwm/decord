// Module ID: 6912
// Function ID: 55078
// Name: getMediaPerformanceClass
// Dependencies: [4110, 2]
// Exports: default

// Module 6912 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4110) /* getSystemVersion */.getDeviceMediaPerformanceClass();
};
