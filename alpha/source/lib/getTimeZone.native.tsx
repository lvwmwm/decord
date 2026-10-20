// Module ID: 18461
// Function ID: 18462
// Name: getTimeZone
// Dependencies: [4902, 2]
// Exports: default

// Module 18461 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
