// Module ID: 15603
// Function ID: 120311
// Name: set
// Dependencies: [653, 10650, 4341, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 15603 (set)
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY";
import set from "getVoiceChannelKeyByChannelId";

const items = [require("ME").MEDIA_MODAL_KEY, , , ];
({ OAUTH2_AUTHORIZE_MODAL_KEY: arr[1], OAUTH2_SUCCESS_RESULT_MODAL_KEY: arr[2], OAUTH2_ERROR_RESULT_MODAL_KEY: arr[3] } = OAUTH2_AUTHORIZE_MODAL_KEY);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    const tmp4 = !require(4341) /* getVoiceChannelKeyByChannelId */.isVoiceChannelModalKey(key);
    let hasItem = !tmp4;
    if (tmp4) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
    const obj = require(4341) /* getVoiceChannelKeyByChannelId */;
  }
  return tmp;
};
