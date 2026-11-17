// Module ID: 8792
// Function ID: 8793
// Name: getDeviceMetadata
// Dependencies: [8689, 2]
// Exports: default

// Module 8792 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
