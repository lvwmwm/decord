// Module ID: 17703
// Function ID: 17704
// Name: getTimeZone
// Dependencies: [4737, 2]
// Exports: default

// Module 17703 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4737 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
