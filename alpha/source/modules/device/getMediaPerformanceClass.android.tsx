// Module ID: 5799
// Function ID: 5800
// Name: getMediaPerformanceClass
// Dependencies: [4902, 2]
// Exports: default

// Module 5799 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
