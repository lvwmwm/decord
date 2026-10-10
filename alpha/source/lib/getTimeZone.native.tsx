// Module ID: 17956
// Function ID: 17957
// Name: getTimeZone
// Dependencies: [5068, 2]
// Exports: default

// Module 17956 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
