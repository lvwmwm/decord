// Module ID: 7342
// Function ID: 7343
// Name: getMediaPerformanceClass
// Dependencies: [4423, 2]
// Exports: default

// Module 7342 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4423 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
