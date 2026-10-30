// Module ID: 11753
// Function ID: 11754
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [1376, 2022, 2]
// Exports: default

// Module 11753 (isActivitySupportedOnClientPlatform)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  let IOS;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    IOS = tmp(2022).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const isAndroidResult = tmpResult.isAndroid();
    const EmbeddedActivitySupportedPlatforms = tmp(2022).EmbeddedActivitySupportedPlatforms;
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
