// Module ID: 7199
// Function ID: 7200
// Name: getMediaPerformanceClass
// Dependencies: [4322, 2]
// Exports: default

// Module 7199 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4322) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
