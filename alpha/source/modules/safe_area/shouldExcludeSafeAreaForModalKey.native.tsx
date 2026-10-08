// Module ID: 17359
// Function ID: 17360
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1085, 10641, 8460, 7476, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 17359 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1085 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7476 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8460 */;
import Constants from "Constants" /* 10641 */;
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
