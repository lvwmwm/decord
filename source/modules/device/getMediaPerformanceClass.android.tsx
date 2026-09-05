// Module ID: 7672
// Function ID: 7673
// Name: getMediaPerformanceClass
// Dependencies: [4539, 2]
// Exports: default

// Module 7672 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4539 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
