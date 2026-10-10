// Module ID: 17579
// Function ID: 17580
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1085, 10863, 8484, 7481, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 17579 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1085 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7481 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8484 */;
import Constants from "Constants" /* 10863 */;
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
