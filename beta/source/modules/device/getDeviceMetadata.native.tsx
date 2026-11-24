// Module ID: 8377
// Function ID: 8378
// Name: getDeviceMetadata
// Dependencies: [8268, 2]
// Exports: default

// Module 8377 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8268 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
