// Module ID: 17704
// Function ID: 17705
// Name: getTimeZone
// Dependencies: [4737, 2]
// Exports: default

// Module 17704 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4737 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
