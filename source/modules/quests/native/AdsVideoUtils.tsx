// Module ID: 13808
// Function ID: 104431
// Name: items
// Dependencies: []
// Exports: isSourceError

// Module 13808 (items)
const items = [-1000, -1003, -1004, -1008];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/quests/native/AdsVideoUtils.tsx");

export const isSourceError = function isSourceError(error) {
  if (null != error) {
    const code = error.error.code;
  }
  if (null != error) {
    const errorException = error.error.errorException;
  }
  if (obj.isAndroid()) {
    let tmp7 = null == errorException;
    if (!tmp7) {
      tmp7 = !errorException.includes("Source error");
    }
    let tmp4 = !tmp7;
  } else {
    const tmp3 = !require(dependencyMap[0]).isIOS();
    tmp4 = !tmp3;
    if (!tmp3) {
      let hasItem = null != code;
      if (hasItem) {
        hasItem = items.includes(code);
      }
      tmp4 = hasItem;
    }
    const obj2 = require(dependencyMap[0]);
  }
  return tmp4;
};
