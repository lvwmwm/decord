// Module ID: 7263
// Function ID: 7264
// Name: getDeviceMetadata
// Dependencies: [7083, 2]
// Exports: default

// Module 7263 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7083 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
