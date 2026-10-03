// Module ID: 7161
// Function ID: 7162
// Name: getDeviceMetadata
// Dependencies: [6984, 2]
// Exports: default

// Module 7161 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6984 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
