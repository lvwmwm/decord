// Module ID: 10596
// Function ID: 10597
// Name: getPlatform
// Dependencies: [1954, 2]
// Exports: default

// Module 10596 (getPlatform)
const result = require("set").fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return require(1954) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return require(1954) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return require(1954) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
