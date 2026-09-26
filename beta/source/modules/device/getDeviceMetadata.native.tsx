// Module ID: 7945
// Function ID: 7946
// Name: getDeviceMetadata
// Dependencies: [7749, 2]
// Exports: default

// Module 7945 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
