// Module ID: 17804
// Function ID: 17805
// Name: getTimeZone
// Dependencies: [4808, 2]
// Exports: default

// Module 17804 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
