// Module ID: 19275
// Function ID: 19276
// Name: getTimeZone
// Dependencies: [4751, 2]
// Exports: default

// Module 19275 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4751 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
