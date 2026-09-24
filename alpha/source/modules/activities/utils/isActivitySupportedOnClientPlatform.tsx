// Module ID: 9717
// Function ID: 9718
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [1364, 1978, 2]
// Exports: default

// Module 9717 (isActivitySupportedOnClientPlatform)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1978).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(1364);
    const EmbeddedActivitySupportedPlatforms = tmp(1978).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(1364).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(1364).isAndroid();
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
