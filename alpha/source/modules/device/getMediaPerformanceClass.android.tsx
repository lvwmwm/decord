// Module ID: 5844
// Function ID: 5845
// Name: getMediaPerformanceClass
// Dependencies: [4874, 2]
// Exports: default

// Module 5844 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4874 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
