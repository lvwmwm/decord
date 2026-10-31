// Module ID: 5890
// Function ID: 5891
// Name: getMediaPerformanceClass
// Dependencies: [4971, 2]
// Exports: default

// Module 5890 (getMediaPerformanceClass)
import DeviceUtils from "DeviceUtils" /* 4971 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  const obj = DeviceUtils;
  return obj.getDeviceMediaPerformanceClass();
};
