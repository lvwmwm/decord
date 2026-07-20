// Module ID: 6903
// Function ID: 55003
// Name: getMediaPerformanceClass
// Dependencies: []
// Exports: default

// Module 6903 (getMediaPerformanceClass)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return require(dependencyMap[0]).getDeviceMediaPerformanceClass();
};
