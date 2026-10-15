// Module ID: 7581
// Function ID: 7582
// Name: getDeviceMetadata
// Dependencies: [7413, 2]
// Exports: default

// Module 7581 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7413 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
