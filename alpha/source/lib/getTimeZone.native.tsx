// Module ID: 18053
// Function ID: 18054
// Name: getTimeZone
// Dependencies: [5072, 2]
// Exports: default

// Module 18053 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5072 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
