// Module ID: 8177
// Function ID: 64549
// Name: getPlatform
// Dependencies: []
// Exports: default

// Module 8177 (getPlatform)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return require(dependencyMap[0]).EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return require(dependencyMap[0]).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return require(dependencyMap[0]).EmbeddedActivitySupportedPlatforms.WEB;
  }
};
