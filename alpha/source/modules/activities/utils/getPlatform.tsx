// Module ID: 5634
// Function ID: 5635
// Name: getPlatform
// Dependencies: [1997, 2]
// Exports: default

// Module 5634 (getPlatform)
import Server from "Server" /* 1997 */;
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
