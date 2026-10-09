// Module ID: 5232
// Function ID: 5233
// Name: getMediaPerformanceClass
// Dependencies: [5067, 2]
// Exports: default

// Module 5232 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5067 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
