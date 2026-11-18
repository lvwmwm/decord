// Module ID: 5693
// Function ID: 5694
// Name: getMediaPerformanceClass
// Dependencies: [4780, 2]
// Exports: default

// Module 5693 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4780 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
