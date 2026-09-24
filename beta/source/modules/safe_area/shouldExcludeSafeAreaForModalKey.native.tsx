// Module ID: 17355
// Function ID: 17356
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1078, 9350, 8672, 4997, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 17355 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1078 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4997 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8672 */;
import Constants from "Constants" /* 9350 */;
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
