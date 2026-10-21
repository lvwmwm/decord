// Module ID: 5821
// Function ID: 5822
// Name: getMediaPerformanceClass
// Dependencies: [4923, 2]
// Exports: default

// Module 5821 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
