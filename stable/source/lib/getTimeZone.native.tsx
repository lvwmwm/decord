// Module ID: 19360
// Function ID: 19361
// Name: getTimeZone
// Dependencies: [4971, 2]
// Exports: default

// Module 19360 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4971 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
