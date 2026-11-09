// Module ID: 6021
// Function ID: 6022
// Name: getMediaPerformanceClass
// Dependencies: [5097, 2]
// Exports: default

// Module 6021 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5097 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
