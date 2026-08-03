// Module ID: 7039
// Function ID: 7040
// Name: getMediaPerformanceClass
// Dependencies: [4235, 2]
// Exports: default

// Module 7039 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4235) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
