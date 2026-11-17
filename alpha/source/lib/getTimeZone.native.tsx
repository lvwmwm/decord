// Module ID: 20188
// Function ID: 20189
// Name: getTimeZone
// Dependencies: [5267, 2]
// Exports: default

// Module 20188 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5267 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
