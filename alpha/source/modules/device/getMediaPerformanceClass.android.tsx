// Module ID: 7258
// Function ID: 7259
// Name: getMediaPerformanceClass
// Dependencies: [4821, 2]
// Exports: default

// Module 7258 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4821 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
