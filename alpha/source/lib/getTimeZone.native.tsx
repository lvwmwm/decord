// Module ID: 19459
// Function ID: 19460
// Name: getTimeZone
// Dependencies: [4780, 2]
// Exports: default

// Module 19459 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4780 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
