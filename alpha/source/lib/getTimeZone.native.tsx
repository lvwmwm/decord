// Module ID: 18720
// Function ID: 18721
// Name: getTimeZone
// Dependencies: [4928, 2]
// Exports: default

// Module 18720 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4928 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
