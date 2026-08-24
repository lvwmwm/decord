// Module ID: 14445
// Function ID: 14446
// Name: isSourceError
// Dependencies: [500, 2]
// Exports: isSourceError

// Module 14445 (isSourceError)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;

let closure_2 = [-1000, -1003, -1004, -1008];
const result = set.fileFinishedImporting("modules/quests/native/AdsVideoUtils.tsx");

export const isSourceError = function isSourceError(error) {
  if (error != null) {
    const code = error.error.code;
  }
  if (error != null) {
    const errorException = error.error.errorException;
  }
  if (obj.isAndroid()) {
    let hasItem;
    if (errorException != null) {
      hasItem = errorException.includes("Source error");
    }
    let isIOSResult = hasItem;
  } else {
    isIOSResult = set2.isIOS();
    if (isIOSResult) {
      let hasItem1 = null != code;
      if (hasItem1) {
        hasItem1 = closure_2.includes(code);
      }
      isIOSResult = hasItem1;
    }
    const tmpResult = set2;
  }
  return isIOSResult;
};
