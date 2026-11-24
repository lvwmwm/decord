// Module ID: 19402
// Function ID: 19403
// Name: getTimeZone
// Dependencies: [4870, 2]
// Exports: default

// Module 19402 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
