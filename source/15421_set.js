// Module ID: 15421
// Function ID: 117709
// Name: set
// Dependencies: []
// Exports: shouldExcludeSafeAreaForModalKey

// Module 15421 (set)
const _module = require(dependencyMap[1]);
const items = [require(dependencyMap[0]).MEDIA_MODAL_KEY, , , ];
({ OAUTH2_AUTHORIZE_MODAL_KEY: arr[1], OAUTH2_SUCCESS_RESULT_MODAL_KEY: arr[2], OAUTH2_ERROR_RESULT_MODAL_KEY: arr[3] } = _module);
const set = new Set(items);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    const tmp4 = !require(dependencyMap[2]).isVoiceChannelModalKey(key);
    let hasItem = !tmp4;
    if (tmp4) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
    const obj = require(dependencyMap[2]);
  }
  return tmp;
};
