// Module ID: 7735
// Function ID: 7736
// Name: getDeviceMetadata
// Dependencies: [7569, 2]
// Exports: default

// Module 7735 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7569 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  const obj = TTIAnalyticsUtils;
  return obj.getDeviceMetadata();
};
