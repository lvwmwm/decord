// Module ID: 19676
// Function ID: 19677
// Name: getTimeZone
// Dependencies: [5100, 2]
// Exports: default

// Module 19676 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
