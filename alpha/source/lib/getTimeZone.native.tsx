// Module ID: 18410
// Function ID: 18411
// Name: getTimeZone
// Dependencies: [5167, 2]
// Exports: default

// Module 18410 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
