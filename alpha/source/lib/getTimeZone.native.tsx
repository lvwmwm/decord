// Module ID: 17028
// Function ID: 17029
// Name: getTimeZone
// Dependencies: [4808, 2]
// Exports: default

// Module 17028 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
