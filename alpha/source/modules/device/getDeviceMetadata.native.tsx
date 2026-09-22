// Module ID: 7916
// Function ID: 7917
// Name: getDeviceMetadata
// Dependencies: [7720, 2]
// Exports: default

// Module 7916 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7720 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
