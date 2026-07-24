// Module ID: 8227
// Function ID: 64814
// Name: getPlatform
// Dependencies: [1881, 2]
// Exports: default

// Module 8227 (getPlatform)
const result = require("set").fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return require(1881) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return require(1881) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return require(1881) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
