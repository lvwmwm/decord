// Module ID: 6010
// Function ID: 6011
// Name: getMediaPerformanceClass
// Dependencies: [5098, 2]
// Exports: default

// Module 6010 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
