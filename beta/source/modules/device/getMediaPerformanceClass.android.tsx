// Module ID: 7945
// Function ID: 7946
// Name: getMediaPerformanceClass
// Dependencies: [4769, 2]
// Exports: default

// Module 7945 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4769 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
