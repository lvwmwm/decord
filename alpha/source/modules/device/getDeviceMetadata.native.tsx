// Module ID: 8257
// Function ID: 8258
// Name: getDeviceMetadata
// Dependencies: [8148, 2]
// Exports: default

// Module 8257 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8148 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
