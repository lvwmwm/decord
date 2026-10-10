// Module ID: 5233
// Function ID: 5234
// Name: getMediaPerformanceClass
// Dependencies: [5068, 2]
// Exports: default

// Module 5233 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
