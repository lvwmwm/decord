// Module ID: 19360
// Function ID: 19361
// Name: shouldExcludeSafeAreaForModalKey
// Dependencies: [1072, 13683, 11045, 9019, 8012, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 19360 (shouldExcludeSafeAreaForModalKey)
import Constants2 from "Constants" /* 1072 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8012 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 9019 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 13683 */;
import Constants from "Constants" /* 11045 */;
import size from "module_2" /* 2 */;

let OAUTH2_AUTHORIZE_MODAL_KEY;
let OAUTH2_ERROR_RESULT_MODAL_KEY;
let OAUTH2_SUCCESS_RESULT_MODAL_KEY;
const MEDIA_MODAL_KEY = Constants2.MEDIA_MODAL_KEY;
const CHECKPOINT_MODAL_KEY = CheckpointModalConstants.CHECKPOINT_MODAL_KEY;
({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = Constants);
const items = [CHECKPOINT_MODAL_KEY, MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY];
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
