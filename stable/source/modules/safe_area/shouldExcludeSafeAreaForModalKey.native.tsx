// Module ID: 17345
// Function ID: 17346
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1074, 9352, 8667, 4995, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 17345 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1074 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4995 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8667 */;
import Constants from "Constants" /* 9352 */;
import size from "module_2" /* 2 */;

({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [Constants2.MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    let hasItem = PrivateChannelCallUtils.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
  }
  return tmp;
};
