// Module ID: 17096
// Function ID: 17097
// Name: getTimeZone
// Dependencies: [4457, 2]
// Exports: default

// Module 17096 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
