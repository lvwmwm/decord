// Module ID: 19627
// Function ID: 19628
// Name: getTimeZone
// Dependencies: [5098, 2]
// Exports: default

// Module 19627 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
