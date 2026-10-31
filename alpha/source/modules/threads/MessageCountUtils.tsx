// Module ID: 8395
// Function ID: 8396
// Name: MessageCountUtils
// Dependencies: [1112, 11, 1113, 2]
// Exports: formatMessageCountLabel, formatMobileMessageCountLabel, getMessageCountText, shouldUseOldMaxMessageCount

// Module 8395 (MessageCountUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl3 from "intl" /* 1113 */;
import ThreadConstants from "ThreadConstants" /* 1112 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function _formatMessageCountLabel(count, iTS3Xe, id) {
  let stringResult;
  let str = "0";
  if (null != count) {
    str = "0";
    if (count >= 0) {
      SnowflakeUtilsDefault;
      if (null == id) {
        let str3 = "50+";
        str = str3;
      }
      let str4 = "100k+";
      if (count < _false) {
        const _HermesInternal = HermesInternal;
        str4 = "" + count;
      }
      str3 = str4;
    }
  }
  if ("0" === str) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.eXHkhl);
  } else {
    const intl = intl3.intl;
    const obj = { count: str };
    stringResult = intl.formatToPlainString(iTS3Xe, obj);
  }
  return stringResult;
}
({ MAX_THREAD_MESSAGE_COUNT: c3, MAX_THREAD_MESSAGE_COUNT_OLD: closure_4 } = ThreadConstants);
const result = size.fileFinishedImporting("modules/threads/MessageCountUtils.tsx");

export function shouldUseOldMaxMessageCount(arg0) {
  const obj = SnowflakeUtilsDefault;
  return obj.compare("992549565104128000", arg0) > -1;
}
export function getMessageCountText(stateFromStores, id) {
  if (null != stateFromStores) {
    if (stateFromStores >= 0) {
      SnowflakeUtilsDefault;
      if (null == id) {
        let str = "50+";
        return str;
      }
      let str2 = "100k+";
      if (stateFromStores < _false) {
        const _HermesInternal = HermesInternal;
        str2 = "" + stateFromStores;
      }
      str = str2;
    }
  }
  return "0";
}
export function formatMobileMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, intl3.t.iTS3Xe, id);
}
export function formatMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, intl3.t.rfAXDV, id);
}
