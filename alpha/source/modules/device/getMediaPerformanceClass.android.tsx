// Module ID: 6048
// Function ID: 6049
// Name: getMediaPerformanceClass
// Dependencies: [5127, 2]
// Exports: default

// Module 6048 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
