// Module ID: 19358
// Function ID: 19359
// Name: getTimeZone
// Dependencies: [4971, 2]
// Exports: default

// Module 19358 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4971 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
