// Module ID: 7950
// Function ID: 7951
// Name: getDeviceMetadata
// Dependencies: [7754, 2]
// Exports: default

// Module 7950 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7754 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
