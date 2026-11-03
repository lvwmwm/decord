// Module ID: 11928
// Function ID: 11929
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [1377, 2149, 2]
// Exports: default

// Module 11928 (isActivitySupportedOnClientPlatform)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  let IOS;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    IOS = tmp(2149).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const isAndroidResult = tmpResult.isAndroid();
    const EmbeddedActivitySupportedPlatforms = tmp(2149).EmbeddedActivitySupportedPlatforms;
    IOS = isAndroidResult ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
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
