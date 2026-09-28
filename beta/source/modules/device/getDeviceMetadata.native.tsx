// Module ID: 7090
// Function ID: 7091
// Name: getDeviceMetadata
// Dependencies: [6895, 2]
// Exports: default

// Module 7090 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6895 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
