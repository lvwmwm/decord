// Module ID: 17705
// Function ID: 17706
// Name: getTimeZone
// Dependencies: [4767, 2]
// Exports: default

// Module 17705 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4767 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
