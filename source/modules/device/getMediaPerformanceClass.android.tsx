// Module ID: 7276
// Function ID: 7277
// Name: getMediaPerformanceClass
// Dependencies: [4359, 2]
// Exports: default

// Module 7276 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4359 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};
