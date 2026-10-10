// Module ID: 10921
// Function ID: 10922
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [1382, 1998, 2]
// Exports: default

// Module 10921 (isActivitySupportedOnClientPlatform)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  let IOS;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    IOS = tmp(1998).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const isAndroidResult = tmpResult.isAndroid();
    const EmbeddedActivitySupportedPlatforms = tmp(1998).EmbeddedActivitySupportedPlatforms;
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
