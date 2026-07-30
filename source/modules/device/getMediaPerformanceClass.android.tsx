// Module ID: 5954
// Function ID: 5955
// Name: getMediaPerformanceClass
// Dependencies: [4169, 2]
// Exports: default

// Module 5954 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4169) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
