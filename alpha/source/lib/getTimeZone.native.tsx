// Module ID: 19240
// Function ID: 19241
// Name: getTimeZone
// Dependencies: [4962, 2]
// Exports: default

// Module 19240 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4962 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
