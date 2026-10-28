// Module ID: 5876
// Function ID: 5877
// Name: getMediaPerformanceClass
// Dependencies: [4961, 2]
// Exports: default

// Module 5876 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
