// Module ID: 17712
// Function ID: 17713
// Name: getTimeZone
// Dependencies: [4736, 2]
// Exports: default

// Module 17712 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4736 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
