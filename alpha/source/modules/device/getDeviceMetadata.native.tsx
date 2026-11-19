// Module ID: 8258
// Function ID: 8259
// Name: getDeviceMetadata
// Dependencies: [8149, 2]
// Exports: default

// Module 8258 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8149 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
