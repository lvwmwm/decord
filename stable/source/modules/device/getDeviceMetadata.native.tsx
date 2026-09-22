// Module ID: 7779
// Function ID: 7780
// Name: getDeviceMetadata
// Dependencies: [7578, 2]
// Exports: default

// Module 7779 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7578 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
