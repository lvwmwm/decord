// Module ID: 8249
// Function ID: 8250
// Name: getDeviceMetadata
// Dependencies: [8250, 2]
// Exports: default

// Module 8249 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8250 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
