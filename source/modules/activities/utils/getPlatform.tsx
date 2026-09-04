// Module ID: 9339
// Function ID: 9340
// Name: getPlatform
// Dependencies: [1954, 2]
// Exports: default

// Module 9339 (getPlatform)
import set from "set" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;

const result = set.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
