// Module ID: 17282
// Function ID: 17283
// Name: getTimeZone
// Dependencies: [4842, 2]
// Exports: default

// Module 17282 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
};
