// Module ID: 5295
// Function ID: 5296
// Name: getMediaPerformanceClass
// Dependencies: [5130, 2]
// Exports: default

// Module 5295 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
