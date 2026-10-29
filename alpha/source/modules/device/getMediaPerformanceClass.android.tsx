// Module ID: 5878
// Function ID: 5879
// Name: getMediaPerformanceClass
// Dependencies: [4962, 2]
// Exports: default

// Module 5878 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4962 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
