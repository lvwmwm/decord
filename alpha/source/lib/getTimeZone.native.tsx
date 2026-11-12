// Module ID: 19980
// Function ID: 19981
// Name: getTimeZone
// Dependencies: [5200, 2]
// Exports: default

// Module 19980 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5200 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
