// Module ID: 5231
// Function ID: 5232
// Name: getMediaPerformanceClass
// Dependencies: [5066, 2]
// Exports: default

// Module 5231 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5066 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
