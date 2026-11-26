// Module ID: 5970
// Function ID: 5971
// Name: getMediaPerformanceClass
// Dependencies: [5000, 2]
// Exports: default

// Module 5970 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5000 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
