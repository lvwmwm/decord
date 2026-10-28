// Module ID: 19007
// Function ID: 19008
// Name: getTimeZone
// Dependencies: [4961, 2]
// Exports: default

// Module 19007 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
