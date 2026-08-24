// Module ID: 16590
// Function ID: 16591
// Name: getTimeZone
// Dependencies: [4358, 2]
// Exports: default

// Module 16590 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4358 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
