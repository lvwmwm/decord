// Module ID: 19802
// Function ID: 19803
// Name: getTimeZone
// Dependencies: [5127, 2]
// Exports: default

// Module 19802 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
