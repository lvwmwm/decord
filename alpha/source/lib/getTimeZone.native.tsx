// Module ID: 18540
// Function ID: 18541
// Name: getTimeZone
// Dependencies: [4923, 2]
// Exports: default

// Module 18540 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
