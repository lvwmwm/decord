// Module ID: 8878
// Function ID: 8879
// Name: getPlatform
// Dependencies: [1979, 2]
// Exports: default

// Module 8878 (getPlatform)
import Server from "Server" /* 1979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return Server.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return Server.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return Server.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
