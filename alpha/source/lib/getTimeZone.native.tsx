// Module ID: 19455
// Function ID: 19456
// Name: getTimeZone
// Dependencies: [4749, 2]
// Exports: default

// Module 19455 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
