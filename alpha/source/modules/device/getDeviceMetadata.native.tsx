// Module ID: 7998
// Function ID: 7999
// Name: getDeviceMetadata
// Dependencies: [7803, 2]
// Exports: default

// Module 7998 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7803 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
