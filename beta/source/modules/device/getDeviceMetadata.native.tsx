// Module ID: 7913
// Function ID: 7914
// Name: getDeviceMetadata
// Dependencies: [7717, 2]
// Exports: default

// Module 7913 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7717 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
