// Module ID: 16622
// Function ID: 16623
// Name: getTimeZone
// Dependencies: [4359, 2]
// Exports: default

// Module 16622 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4359 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
