// Module ID: 9662
// Function ID: 9663
// Name: isActivitySupportedOnClientPlatform
// Dependencies: [1368, 1982, 2]
// Exports: default

// Module 9662 (isActivitySupportedOnClientPlatform)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1982).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(1368);
    const EmbeddedActivitySupportedPlatforms = tmp(1982).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(1368).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(1368).isAndroid();
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
