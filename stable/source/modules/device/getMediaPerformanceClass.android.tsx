// Module ID: 5333
// Function ID: 5334
// Name: getMediaPerformanceClass
// Dependencies: [5167, 2]
// Exports: default

// Module 5333 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
