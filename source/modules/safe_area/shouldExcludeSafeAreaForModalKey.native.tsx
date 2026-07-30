// Module ID: 15693
// Function ID: 15694
// Name: set
// Dependencies: [676, 10673, 4399, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 15693 (set)
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY";
import set from "openChannelCallModal";

const items = [require("ME").MEDIA_MODAL_KEY, , , ];
({ OAUTH2_AUTHORIZE_MODAL_KEY: arr[1], OAUTH2_SUCCESS_RESULT_MODAL_KEY: arr[2], OAUTH2_ERROR_RESULT_MODAL_KEY: arr[3] } = OAUTH2_AUTHORIZE_MODAL_KEY);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    let hasItem = require(4399) /* openChannelCallModal */.isVoiceChannelModalKey(key);
    if (!hasItem) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
    const obj = require(4399) /* openChannelCallModal */;
  }
  return tmp;
};
