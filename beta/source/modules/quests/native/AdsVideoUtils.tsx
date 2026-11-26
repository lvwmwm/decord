// Module ID: 16352
// Function ID: 16353
// Name: AdsVideoUtils
// Dependencies: [1378, 2]
// Exports: isSourceError

// Module 16352 (AdsVideoUtils)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let closure_2 = [-1000, -1003, -1004, -1008];
const result = size.fileFinishedImporting("modules/quests/native/AdsVideoUtils.tsx");

export function isSourceError(error) {
  let code;
  let errorException;
  let isIOSResult;
  if (error != null) {
    code = error.error.code;
  }
  if (error != null) {
    errorException = error.error.errorException;
  }
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    let hasItem;
    if (errorException != null) {
      hasItem = errorException.includes("Source error");
    }
    isIOSResult = hasItem;
  } else {
    const tmpResult = PlatformUtils;
    isIOSResult = tmpResult.isIOS();
    if (isIOSResult) {
      const hasItem1 = null != code && closure_2.includes(code);
      isIOSResult = hasItem1;
    }
  }
  return isIOSResult;
}
