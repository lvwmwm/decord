// Module ID: 7094
// Function ID: 7095
// Name: getDeviceMetadata
// Dependencies: [6899, 2]
// Exports: default

// Module 7094 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6899 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
