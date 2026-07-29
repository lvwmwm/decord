// Module ID: 5956
// Function ID: 5957
// Name: getMediaPerformanceClass
// Dependencies: [4169, 2]
// Exports: default

// Module 5956 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4169) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
