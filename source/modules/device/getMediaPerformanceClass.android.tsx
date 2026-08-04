// Module ID: 7051
// Function ID: 7052
// Name: getMediaPerformanceClass
// Dependencies: [4265, 2]
// Exports: default

// Module 7051 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4265) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
