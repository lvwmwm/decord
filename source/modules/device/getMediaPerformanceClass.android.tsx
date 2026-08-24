// Module ID: 5423
// Function ID: 5424
// Name: getMediaPerformanceClass
// Dependencies: [4358, 2]
// Exports: default

// Module 5423 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4358 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
