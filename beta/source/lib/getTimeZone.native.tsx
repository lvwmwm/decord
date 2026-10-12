// Module ID: 18013
// Function ID: 18014
// Name: getTimeZone
// Dependencies: [5068, 2]
// Exports: default

// Module 18013 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
