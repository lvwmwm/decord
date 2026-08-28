// Module ID: 8383
// Function ID: 8384
// Name: getPlatform
// Dependencies: [1956, 2]
// Exports: default

// Module 8383 (getPlatform)
import set from "set" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1956 */;

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
