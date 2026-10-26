// Module ID: 5840
// Function ID: 5841
// Name: getMediaPerformanceClass
// Dependencies: [4928, 2]
// Exports: default

// Module 5840 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4928 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
