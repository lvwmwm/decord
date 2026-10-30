// Module ID: 5677
// Function ID: 5678
// Name: getPlatform
// Dependencies: [2022, 2]
// Exports: default

// Module 5677 (getPlatform)
import EmbeddedActivitySupportedPlatforms from "EmbeddedActivitySupportedPlatforms" /* 2022 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
