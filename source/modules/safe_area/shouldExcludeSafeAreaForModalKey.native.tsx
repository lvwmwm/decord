// Module ID: 15613
// Function ID: 120439
// Name: set
// Dependencies: [653, 10614, 4342, 2]
// Exports: shouldExcludeSafeAreaForModalKey

// Module 15613 (set)
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY";
import set from "getVoiceChannelKeyByChannelId";

const items = [require("ME").MEDIA_MODAL_KEY, , , ];
({ OAUTH2_AUTHORIZE_MODAL_KEY: arr[1], OAUTH2_SUCCESS_RESULT_MODAL_KEY: arr[2], OAUTH2_ERROR_RESULT_MODAL_KEY: arr[3] } = OAUTH2_AUTHORIZE_MODAL_KEY);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx");

export const shouldExcludeSafeAreaForModalKey = function shouldExcludeSafeAreaForModalKey(key) {
  let tmp = null != key;
  if (tmp) {
    const tmp4 = !require(4342) /* getVoiceChannelKeyByChannelId */.isVoiceChannelModalKey(key);
    let hasItem = !tmp4;
    if (tmp4) {
      hasItem = set.has(key);
    }
    tmp = hasItem;
    const obj = require(4342) /* getVoiceChannelKeyByChannelId */;
  }
  return tmp;
};
