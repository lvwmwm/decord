// Module ID: 7424
// Function ID: 7425
// Name: getMediaPerformanceClass
// Dependencies: [4457, 2]
// Exports: default

// Module 7424 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
