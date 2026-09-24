// Module ID: 17714
// Function ID: 17715
// Name: getTimeZone
// Dependencies: [4769, 2]
// Exports: default

// Module 17714 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4769 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
