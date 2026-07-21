// Module ID: 7627
// Function ID: 61111
// Name: shouldUseOldMaxMessageCount
// Dependencies: []
// Exports: formatMessageCountLabel, formatMobileMessageCountLabel

// Module 7627 (shouldUseOldMaxMessageCount)
function shouldUseOldMaxMessageCount(arg0) {
  return importDefault(dependencyMap[1]).compare("992549565104128000", arg0) > -1;
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
    const intl2 = require(dependencyMap[2]).intl;
    let stringResult = intl2.string(require(dependencyMap[2]).t.eXHkhl);
  } else {
    const intl = require(dependencyMap[2]).intl;
    const obj = { count: tmp };
    stringResult = intl.formatToPlainString(iTS3Xe, obj);
  }
  return stringResult;
}
const _module = require(dependencyMap[0]);
({ MAX_THREAD_MESSAGE_COUNT: closure_3, MAX_THREAD_MESSAGE_COUNT_OLD: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/threads/MessageCountUtils.tsx");

export { shouldUseOldMaxMessageCount };
export { getMessageCountText };
export const formatMobileMessageCountLabel = function formatMobileMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, require(dependencyMap[2]).t.iTS3Xe, id);
};
export const formatMessageCountLabel = function formatMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, require(dependencyMap[2]).t.rfAXDV, id);
};
