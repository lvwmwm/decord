// Module ID: 6023
// Function ID: 6024
// Name: getMediaPerformanceClass
// Dependencies: [5099, 2]
// Exports: default

// Module 6023 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
