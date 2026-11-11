// Module ID: 19985
// Function ID: 19986
// Name: getTimeZone
// Dependencies: [5200, 2]
// Exports: default

// Module 19985 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5200 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
