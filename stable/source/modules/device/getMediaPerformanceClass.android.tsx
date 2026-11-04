// Module ID: 5872
// Function ID: 5873
// Name: getMediaPerformanceClass
// Dependencies: [4960, 2]
// Exports: default

// Module 5872 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
