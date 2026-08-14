// Module ID: 7205
// Function ID: 7206
// Name: getDeviceMetadata
// Dependencies: [7004, 2]
// Exports: default

// Module 7205 (getDeviceMetadata)
const result = require("set").fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return require(7004) /* getDeviceMetadata */.getDeviceMetadata();
};
