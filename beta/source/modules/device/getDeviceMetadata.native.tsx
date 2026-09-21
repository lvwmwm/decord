// Module ID: 7918
// Function ID: 7919
// Name: getDeviceMetadata
// Dependencies: [7722, 2]
// Exports: default

// Module 7918 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
