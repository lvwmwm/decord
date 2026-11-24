// Module ID: 5783
// Function ID: 5784
// Name: getMediaPerformanceClass
// Dependencies: [4870, 2]
// Exports: default

// Module 5783 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
