// Module ID: 5885
// Function ID: 5886
// Name: getMediaPerformanceClass
// Dependencies: [4966, 2]
// Exports: default

// Module 5885 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
