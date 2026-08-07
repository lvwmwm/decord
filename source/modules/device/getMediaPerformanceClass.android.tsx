// Module ID: 7071
// Function ID: 7072
// Name: getMediaPerformanceClass
// Dependencies: [4282, 2]
// Exports: default

// Module 7071 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4282) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
