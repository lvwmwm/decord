// Module ID: 7285
// Function ID: 7286
// Name: getDeviceMetadata
// Dependencies: [7091, 2]
// Exports: default

// Module 7285 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7091 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
