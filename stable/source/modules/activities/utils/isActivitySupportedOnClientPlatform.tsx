// Module ID: 9659
// Function ID: 9660
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [1363, 1894, 2]
// Exports: default

// Module 9659 (isActivitySupportedOnClientPlatform)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1894).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(1363);
    const EmbeddedActivitySupportedPlatforms = tmp(1894).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(1363).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(1363).isAndroid();
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
