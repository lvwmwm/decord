// Module ID: 20138
// Function ID: 20139
// Name: getTimeZone
// Dependencies: [5263, 2]
// Exports: default

// Module 20138 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
