// Module ID: 10651
// Function ID: 10652
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [500, 1954, 2]
// Exports: default

// Module 10651 (isActivitySupportedOnClientPlatform)
const result = require("set").fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1954).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(500);
    const EmbeddedActivitySupportedPlatforms = tmp(1954).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(500).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(500).isAndroid();
  }
  let flag;
  if (arr != null) {
    flag = arr.includes(IOS);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
