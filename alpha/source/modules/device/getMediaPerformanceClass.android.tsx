// Module ID: 5841
// Function ID: 5842
// Name: getMediaPerformanceClass
// Dependencies: [4929, 2]
// Exports: default

// Module 5841 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4929 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
