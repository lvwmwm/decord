// Module ID: 5418
// Function ID: 5419
// Name: getMediaPerformanceClass
// Dependencies: [4354, 2]
// Exports: default

// Module 5418 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4354) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
