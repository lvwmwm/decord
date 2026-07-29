// Module ID: 8018
// Function ID: 8019
// Name: getPlatform
// Dependencies: [1906, 2]
// Exports: default

// Module 8018 (getPlatform)
const result = require("set").fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return require(1906) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return require(1906) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return require(1906) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
