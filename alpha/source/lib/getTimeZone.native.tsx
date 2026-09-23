// Module ID: 17781
// Function ID: 17782
// Name: getTimeZone
// Dependencies: [4806, 2]
// Exports: default

// Module 17781 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
