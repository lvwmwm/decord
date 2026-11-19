// Module ID: 5662
// Function ID: 5663
// Name: getMediaPerformanceClass
// Dependencies: [4749, 2]
// Exports: default

// Module 5662 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
