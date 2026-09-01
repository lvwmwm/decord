// Module ID: 7415
// Function ID: 7416
// Name: getMediaPerformanceClass
// Dependencies: [4457, 2]
// Exports: default

// Module 7415 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
