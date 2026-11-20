// Module ID: 5664
// Function ID: 5665
// Name: getMediaPerformanceClass
// Dependencies: [4751, 2]
// Exports: default

// Module 5664 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4751 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
