// Module ID: 6028
// Function ID: 6029
// Name: getMediaPerformanceClass
// Dependencies: [5100, 2]
// Exports: default

// Module 6028 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
