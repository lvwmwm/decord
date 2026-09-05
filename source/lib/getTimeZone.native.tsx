// Module ID: 17282
// Function ID: 17283
// Name: getTimeZone
// Dependencies: [4539, 2]
// Exports: default

// Module 17282 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4539 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
