// Module ID: 17304
// Function ID: 17305
// Name: getTimeZone
// Dependencies: [4821, 2]
// Exports: default

// Module 17304 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4821 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
