// Module ID: 7080
// Function ID: 7081
// Name: getMediaPerformanceClass
// Dependencies: [4808, 2]
// Exports: default

// Module 7080 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
