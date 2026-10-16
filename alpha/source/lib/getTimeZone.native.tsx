// Module ID: 18345
// Function ID: 18346
// Name: getTimeZone
// Dependencies: [5130, 2]
// Exports: default

// Module 18345 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
