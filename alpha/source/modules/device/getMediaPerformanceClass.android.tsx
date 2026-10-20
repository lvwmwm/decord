// Module ID: 5797
// Function ID: 5798
// Name: getMediaPerformanceClass
// Dependencies: [4902, 2]
// Exports: default

// Module 5797 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
