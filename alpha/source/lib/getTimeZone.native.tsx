// Module ID: 18630
// Function ID: 18631
// Name: getTimeZone
// Dependencies: [4926, 2]
// Exports: default

// Module 18630 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
