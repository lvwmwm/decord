// Module ID: 5296
// Function ID: 5297
// Name: getMediaPerformanceClass
// Dependencies: [5130, 2]
// Exports: default

// Module 5296 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
