// Module ID: 17060
// Function ID: 17061
// Name: getTimeZone
// Dependencies: [4812, 2]
// Exports: default

// Module 17060 (getTimeZone)
import DeviceUtils from "DeviceUtils" /* 4812 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  const obj = DeviceUtils;
  return obj.getTimeZone();
};
