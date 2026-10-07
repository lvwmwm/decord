// Module ID: 7156
// Function ID: 7157
// Name: getMediaPerformanceClass
// Dependencies: [4866, 2]
// Exports: default

// Module 7156 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4866 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
