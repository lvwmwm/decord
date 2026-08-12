// Module ID: 16019
// Function ID: 16020
// Name: OAUTH2_AUTHORIZE_MODAL_KEY
// Dependencies: [676, 10679, 8971, 4553, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 16019 (OAUTH2_AUTHORIZE_MODAL_KEY)
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
    let hasItem = require(4553) /* openChannelCallModal */.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
    const obj = require(4553) /* openChannelCallModal */;
  }
  return tmp;
};
