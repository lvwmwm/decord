// Module ID: 7171
// Function ID: 7172
// Name: getMediaPerformanceClass
// Dependencies: [4324, 2]
// Exports: default

// Module 7171 (getMediaPerformanceClass)
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(4324) /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};
