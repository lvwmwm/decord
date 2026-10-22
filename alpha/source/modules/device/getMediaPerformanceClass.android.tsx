// Module ID: 5827
// Function ID: 5828
// Name: getMediaPerformanceClass
// Dependencies: [4926, 2]
// Exports: default

// Module 5827 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
