// Module ID: 19057
// Function ID: 19058
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1072, 12423, 10656, 9622, 6402, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 19057 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1072 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6402 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 9622 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12423 */;
import Constants from "Constants" /* 10656 */;
import size from "module_2" /* 2 */;

let CHECKPOINT_MODAL_KEY;
let CHECKPOINT_UNAVAILABLE_MODAL_KEY;
let OAUTH2_AUTHORIZE_MODAL_KEY;
let OAUTH2_ERROR_RESULT_MODAL_KEY;
let OAUTH2_SUCCESS_RESULT_MODAL_KEY;
const MEDIA_MODAL_KEY = Constants2.MEDIA_MODAL_KEY;
({ CHECKPOINT_MODAL_KEY, CHECKPOINT_UNAVAILABLE_MODAL_KEY } = CheckpointModalConstants);
({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [CHECKPOINT_MODAL_KEY, CHECKPOINT_UNAVAILABLE_MODAL_KEY, MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
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
