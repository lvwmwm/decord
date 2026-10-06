// Module ID: 17450
// Function ID: 17451
// Name: getTimeZone
// Dependencies: [4872, 2]
// Exports: default

// Module 17450 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4872 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
