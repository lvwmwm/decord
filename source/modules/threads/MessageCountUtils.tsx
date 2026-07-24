// Module ID: 7723
// Function ID: 61456
// Name: shouldUseOldMaxMessageCount
// Dependencies: [1211, 21, 1212, 2]
// Exports: formatMessageCountLabel, formatMobileMessageCountLabel

// Module 7723 (shouldUseOldMaxMessageCount)
import AbortCodes from "AbortCodes";

let closure_3;
let closure_4;
function shouldUseOldMaxMessageCount(arg0) {
  return importDefault(21).compare("992549565104128000", arg0) > -1;
}
function getMessageCountText(stateFromStores, id) {
  if (null != stateFromStores) {
    if (stateFromStores >= 0) {
      if (null == id) {
        let str = "50+";
        return str;
      }
      let str2 = "100k+";
      if (stateFromStores < closure_3) {
        const _HermesInternal = HermesInternal;
        str2 = "" + stateFromStores;
      }
      str = str2;
    }
  }
  return "0";
}
function _formatMessageCountLabel(count, iTS3Xe, id) {
  const tmp = getMessageCountText(count, id);
  if ("0" === tmp) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.eXHkhl);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { count: tmp };
    stringResult = intl.formatToPlainString(iTS3Xe, obj);
  }
  return stringResult;
}
({ MAX_THREAD_MESSAGE_COUNT: closure_3, MAX_THREAD_MESSAGE_COUNT_OLD: closure_4 } = AbortCodes);
const result = require("getSystemLocale").fileFinishedImporting("modules/threads/MessageCountUtils.tsx");

export { shouldUseOldMaxMessageCount };
export { getMessageCountText };
export const formatMobileMessageCountLabel = function formatMobileMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, require(1212) /* getSystemLocale */.t.iTS3Xe, id);
};
export const formatMessageCountLabel = function formatMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, require(1212) /* getSystemLocale */.t.rfAXDV, id);
};
