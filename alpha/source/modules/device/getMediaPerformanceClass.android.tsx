// Module ID: 6025
// Function ID: 6026
// Name: getMediaPerformanceClass
// Dependencies: [5098, 2]
// Exports: default

// Module 6025 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
