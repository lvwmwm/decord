// Module ID: 10663
// Function ID: 10664
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [1381, 1997, 2]
// Exports: default

// Module 10663 (isActivitySupportedOnClientPlatform)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  let IOS;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    IOS = tmp(1997).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const isAndroidResult = tmpResult.isAndroid();
    const EmbeddedActivitySupportedPlatforms = tmp(1997).EmbeddedActivitySupportedPlatforms;
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
