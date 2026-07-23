// Module ID: 10518
// Function ID: 82109
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [477, 1881, 2]
// Exports: default

// Module 10518 (isActivitySupportedOnClientPlatform)
const result = require("set").fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1881).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(477);
    const EmbeddedActivitySupportedPlatforms = require(1881) /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms;
    IOS = tmp(477).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(477).isAndroid();
  }
  let hasItem;
  if (null != arr) {
    hasItem = arr.includes(IOS);
  }
  return null != hasItem && hasItem;
};
