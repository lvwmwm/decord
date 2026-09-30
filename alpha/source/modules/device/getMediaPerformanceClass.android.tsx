// Module ID: 7280
// Function ID: 7281
// Name: getMediaPerformanceClass
// Dependencies: [4842, 2]
// Exports: default

// Module 7280 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
