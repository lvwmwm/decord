// Module ID: 19641
// Function ID: 19642
// Name: getTimeZone
// Dependencies: [5098, 2]
// Exports: default

// Module 19641 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
