// Module ID: 16707
// Function ID: 16708
// Name: getTimeZone
// Dependencies: [4423, 2]
// Exports: default

// Module 16707 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4423 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
