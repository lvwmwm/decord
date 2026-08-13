// Module ID: 7177
// Function ID: 7178
// Name: getMediaPerformanceClass
// Dependencies: [4322, 2]
// Exports: default

// Module 7177 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4322) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
