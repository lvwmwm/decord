// Module ID: 17062
// Function ID: 17063
// Name: getTimeZone
// Dependencies: [4813, 2]
// Exports: default

// Module 17062 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4813 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
