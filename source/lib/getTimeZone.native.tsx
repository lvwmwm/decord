// Module ID: 16773
// Function ID: 16774
// Name: getTimeZone
// Dependencies: [4424, 2]
// Exports: default

// Module 16773 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4424 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};
