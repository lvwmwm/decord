// Module ID: 10508
// Function ID: 82059
// Name: isActivitySupportedOnClientPlatform
// Dependencies: []
// Exports: default

// Module 10508 (isActivitySupportedOnClientPlatform)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(tmp2[1]).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(tmp2[0]);
    const EmbeddedActivitySupportedPlatforms = require(dependencyMap[1]).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(tmp2[0]).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(tmp2[0]).isAndroid();
  }
  let hasItem;
  if (null != arr) {
    hasItem = arr.includes(IOS);
  }
  return null != hasItem && hasItem;
};
