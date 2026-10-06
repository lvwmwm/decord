// Module ID: 7174
// Function ID: 7175
// Name: getDeviceMetadata
// Dependencies: [6997, 2]
// Exports: default

// Module 7174 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6997 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
