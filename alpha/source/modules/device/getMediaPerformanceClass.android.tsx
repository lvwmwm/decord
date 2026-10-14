// Module ID: 5238
// Function ID: 5239
// Name: getMediaPerformanceClass
// Dependencies: [5072, 2]
// Exports: default

// Module 5238 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5072 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
