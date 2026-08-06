// Module ID: 7052
// Function ID: 7053
// Name: getMediaPerformanceClass
// Dependencies: [4265, 2]
// Exports: default

// Module 7052 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4265) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
