// Module ID: 7365
// Function ID: 7366
// Name: getDeviceMetadata
// Dependencies: [7197, 2]
// Exports: default

// Module 7365 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7197 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
