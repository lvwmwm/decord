// Module ID: 16824
// Function ID: 16825
// Name: getTimeZone
// Dependencies: [4427, 2]
// Exports: default

// Module 16824 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4427 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
