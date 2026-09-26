// Module ID: 7940
// Function ID: 7941
// Name: getMediaPerformanceClass
// Dependencies: [4767, 2]
// Exports: default

// Module 7940 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4767 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
