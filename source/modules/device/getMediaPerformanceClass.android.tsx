// Module ID: 7132
// Function ID: 7133
// Name: getMediaPerformanceClass
// Dependencies: [4283, 2]
// Exports: default

// Module 7132 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4283) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
