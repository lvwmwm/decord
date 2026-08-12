// Module ID: 14332
// Function ID: 14333
// Name: isSourceError
// Dependencies: [500, 2]
// Exports: isSourceError

// Module 14332 (isSourceError)
let closure_2 = [-1000, -1003, -1004, -1008];
const result = require("set").fileFinishedImporting("modules/quests/native/AdsVideoUtils.tsx");

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
    isIOSResult = require(500) /* set */.isIOS();
    if (isIOSResult) {
      let hasItem1 = null != code;
      if (hasItem1) {
        hasItem1 = closure_2.includes(code);
      }
      isIOSResult = hasItem1;
    }
    const tmpResult = require(500) /* set */;
  }
  return isIOSResult;
};
