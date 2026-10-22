// Module ID: 5826
// Function ID: 5827
// Name: getMediaPerformanceClass
// Dependencies: [4926, 2]
// Exports: default

// Module 5826 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
