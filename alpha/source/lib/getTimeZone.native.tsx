// Module ID: 19793
// Function ID: 19794
// Name: getTimeZone
// Dependencies: [5099, 2]
// Exports: default

// Module 19793 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
