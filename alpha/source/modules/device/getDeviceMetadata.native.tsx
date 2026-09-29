// Module ID: 7255
// Function ID: 7256
// Name: getDeviceMetadata
// Dependencies: [7061, 2]
// Exports: default

// Module 7255 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7061 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
