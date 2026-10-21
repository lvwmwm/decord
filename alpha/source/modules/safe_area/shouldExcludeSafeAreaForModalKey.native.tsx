// Module ID: 18155
// Function ID: 18156
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1087, 10703, 8813, 7843, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 18155 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1087 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7843 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8813 */;
import Constants from "Constants" /* 10703 */;
import size from "module_2" /* 2 */;

let OAUTH2_AUTHORIZE_MODAL_KEY;
let OAUTH2_ERROR_RESULT_MODAL_KEY;
let OAUTH2_SUCCESS_RESULT_MODAL_KEY;
const MEDIA_MODAL_KEY = Constants2.MEDIA_MODAL_KEY;
({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    const obj = PrivateChannelCallUtils;
    const hasItem = obj.isVoiceChannelModalKey(key) || set.has(key);
    tmp = hasItem;
  }
  return tmp;
};
