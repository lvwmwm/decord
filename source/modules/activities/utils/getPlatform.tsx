// Module ID: 10606
// Function ID: 10607
// Name: getPlatform
// Dependencies: [1935, 2]
// Exports: default

// Module 10606 (getPlatform)
const result = require("set").fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return require(1935) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return require(1935) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return require(1935) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
