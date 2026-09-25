// Module ID: 7085
// Function ID: 7086
// Name: getDeviceMetadata
// Dependencies: [6890, 2]
// Exports: default

// Module 7085 (getDeviceMetadata)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6890 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/getDeviceMetadata.native.tsx");

export default function getDeviceMetadata() {
  return TTIAnalyticsUtils.getDeviceMetadata();
};
