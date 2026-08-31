// Module ID: 7383
// Function ID: 7384
// Name: getMediaPerformanceClass
// Dependencies: [4427, 2]
// Exports: default

// Module 7383 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4427 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
