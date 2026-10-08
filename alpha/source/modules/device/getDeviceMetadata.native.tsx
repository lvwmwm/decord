// Module ID: 7353
// Function ID: 7354
// Name: getDeviceMetadata
// Dependencies: [7185, 2]
// Exports: default

// Module 7353 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7185 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
