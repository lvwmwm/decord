// Module ID: 7908
// Function ID: 7909
// Name: getMediaPerformanceClass
// Dependencies: [4735, 2]
// Exports: default

// Module 7908 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4735 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
