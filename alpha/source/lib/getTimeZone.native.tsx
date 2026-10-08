// Module ID: 17732
// Function ID: 17733
// Name: getTimeZone
// Dependencies: [5066, 2]
// Exports: default

// Module 17732 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5066 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
