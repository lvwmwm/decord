// Module ID: 7993
// Function ID: 63416
// Name: getPlatform
// Dependencies: [1882, 2]
// Exports: default

// Module 7993 (getPlatform)
const result = require("set").fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return require(1882) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return require(1882) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return require(1882) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
