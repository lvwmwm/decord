// Module ID: 19259
// Function ID: 19260
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1072, 11051, 9031, 8030, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 19259 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1072 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8030 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 9031 */;
import Constants from "Constants" /* 11051 */;
import size from "module_2" /* 2 */;

let OAUTH2_AUTHORIZE_MODAL_KEY;
let OAUTH2_ERROR_RESULT_MODAL_KEY;
let OAUTH2_SUCCESS_RESULT_MODAL_KEY;
const MEDIA_MODAL_KEY = Constants2.MEDIA_MODAL_KEY;
({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    const obj = PrivateChannelCallUtils;
    const hasItem = obj.isVoiceChannelModalKey(key) || set.has(key);
    tmp = hasItem;
  }
  return tmp;
}
