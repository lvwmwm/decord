// Module ID: 19636
// Function ID: 19637
// Name: getTimeZone
// Dependencies: [5000, 2]
// Exports: default

// Module 19636 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5000 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
