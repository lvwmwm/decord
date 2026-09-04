// Module ID: 7603
// Function ID: 7604
// Name: getMediaPerformanceClass
// Dependencies: [4460, 2]
// Exports: default

// Module 7603 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4460 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
