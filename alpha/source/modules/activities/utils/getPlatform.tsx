// Module ID: 5836
// Function ID: 5837
// Name: getPlatform
// Dependencies: [2144, 2]
// Exports: default

// Module 5836 (getPlatform)
import EmbeddedActivitySupportedPlatforms from "EmbeddedActivitySupportedPlatforms" /* 2144 */;
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
