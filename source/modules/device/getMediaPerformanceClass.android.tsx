// Module ID: 5960
// Function ID: 5961
// Name: getMediaPerformanceClass
// Dependencies: [4173, 2]
// Exports: default

// Module 5960 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4173) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
