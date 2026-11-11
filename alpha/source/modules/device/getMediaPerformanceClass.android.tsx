// Module ID: 6136
// Function ID: 6137
// Name: getMediaPerformanceClass
// Dependencies: [5200, 2]
// Exports: default

// Module 6136 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5200 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
