// Module ID: 7025
// Function ID: 7026
// Name: getMediaPerformanceClass
// Dependencies: [4235, 2]
// Exports: default

// Module 7025 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4235) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
