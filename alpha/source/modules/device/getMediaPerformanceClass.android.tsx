// Module ID: 7169
// Function ID: 7170
// Name: getMediaPerformanceClass
// Dependencies: [4872, 2]
// Exports: default

// Module 7169 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4872 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
