// Module ID: 16860
// Function ID: 16861
// Name: getTimeZone
// Dependencies: [4457, 2]
// Exports: default

// Module 16860 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
