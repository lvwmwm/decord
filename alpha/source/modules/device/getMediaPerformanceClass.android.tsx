// Module ID: 6189
// Function ID: 6190
// Name: getMediaPerformanceClass
// Dependencies: [5263, 2]
// Exports: default

// Module 6189 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
