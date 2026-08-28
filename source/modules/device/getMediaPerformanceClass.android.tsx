// Module ID: 7362
// Function ID: 7363
// Name: getMediaPerformanceClass
// Dependencies: [4425, 2]
// Exports: default

// Module 7362 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4425 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
