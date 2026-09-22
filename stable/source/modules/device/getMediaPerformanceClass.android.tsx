// Module ID: 7774
// Function ID: 7775
// Name: getMediaPerformanceClass
// Dependencies: [4615, 2]
// Exports: default

// Module 7774 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4615 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
