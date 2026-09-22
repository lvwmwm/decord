// Module ID: 7911
// Function ID: 7912
// Name: getMediaPerformanceClass
// Dependencies: [4736, 2]
// Exports: default

// Module 7911 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4736 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
};
