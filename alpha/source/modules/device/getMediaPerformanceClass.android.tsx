// Module ID: 6197
// Function ID: 6198
// Name: getMediaPerformanceClass
// Dependencies: [5267, 2]
// Exports: default

// Module 6197 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5267 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
