// Module ID: 5939
// Function ID: 5940
// Name: getMediaPerformanceClass
// Dependencies: [4969, 2]
// Exports: default

// Module 5939 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
