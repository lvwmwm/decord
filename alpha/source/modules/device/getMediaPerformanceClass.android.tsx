// Module ID: 7993
// Function ID: 7994
// Name: getMediaPerformanceClass
// Dependencies: [4806, 2]
// Exports: default

// Module 7993 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
