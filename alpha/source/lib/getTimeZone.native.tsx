// Module ID: 19301
// Function ID: 19302
// Name: getTimeZone
// Dependencies: [4966, 2]
// Exports: default

// Module 19301 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
