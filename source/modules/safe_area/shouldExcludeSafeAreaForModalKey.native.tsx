// Module ID: 15962
// Function ID: 15963
// Name: OAUTH2_AUTHORIZE_MODAL_KEY
// Dependencies: [676, 10626, 8932, 4513, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 15962 (OAUTH2_AUTHORIZE_MODAL_KEY)
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY";
import set from "SHARE_PREPARING_MODAL_KEY";

let OAUTH2_AUTHORIZE_MODAL_KEY;
let OAUTH2_ERROR_RESULT_MODAL_KEY;
let OAUTH2_SUCCESS_RESULT_MODAL_KEY;
({ OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY } = OAUTH2_AUTHORIZE_MODAL_KEY);
const items = [require("ME").MEDIA_MODAL_KEY, OAUTH2_AUTHORIZE_MODAL_KEY, OAUTH2_SUCCESS_RESULT_MODAL_KEY, OAUTH2_ERROR_RESULT_MODAL_KEY, require("SHARE_PREPARING_MODAL_KEY").SHARE_PREPARING_MODAL_KEY];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    let hasItem = require(4513) /* openChannelCallModal */.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
    const obj = require(4513) /* openChannelCallModal */;
  }
  return tmp;
};
