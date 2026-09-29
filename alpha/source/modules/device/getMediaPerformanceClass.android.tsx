// Module ID: 7250
// Function ID: 7251
// Name: getMediaPerformanceClass
// Dependencies: [4812, 2]
// Exports: default

// Module 7250 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4812 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
