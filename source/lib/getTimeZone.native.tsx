// Module ID: 17202
// Function ID: 17203
// Name: getTimeZone
// Dependencies: [4460, 2]
// Exports: default

// Module 17202 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4460 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
