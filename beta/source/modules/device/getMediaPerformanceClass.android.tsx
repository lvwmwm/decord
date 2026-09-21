// Module ID: 7913
// Function ID: 7914
// Name: getMediaPerformanceClass
// Dependencies: [4737, 2]
// Exports: default

// Module 7913 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4737 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
