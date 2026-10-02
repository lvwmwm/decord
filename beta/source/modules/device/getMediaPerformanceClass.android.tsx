// Module ID: 7089
// Function ID: 7090
// Name: getMediaPerformanceClass
// Dependencies: [4813, 2]
// Exports: default

// Module 7089 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4813 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
