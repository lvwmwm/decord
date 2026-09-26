// Module ID: 17056
// Function ID: 17057
// Name: getTimeZone
// Dependencies: [4812, 2]
// Exports: default

// Module 17056 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4812 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
