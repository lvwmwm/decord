// Module ID: 15561
// Function ID: 120017
// Name: getMessageTimestampForChannel
// Dependencies: [4142, 21, 11628, 566, 3712, 7023, 2]
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 15561 (getMessageTimestampForChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getMessageTimestampForChannel(loaded) {
  let lastMessageId;
  let message;
  ({ lastMessageId, message } = loaded);
  if (loaded.loaded) {
    if (null != message) {
      let extractTimestampResult = importDefault(21).extractTimestamp(message.id);
      const obj2 = importDefault(21);
    }
    return extractTimestampResult;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = importDefault(21).extractTimestamp(lastMessageId);
    const obj = importDefault(21);
  }
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  const _require = channel;
  let obj = _require(11628);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = {};
  const items = [_isNativeReflectConstruct];
  obj.lastMessageId = _require(566).useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  const tmp3 = getMessageTimestampForChannel(obj);
  let str = "";
  if (null != tmp3) {
    str = importDefault(3712)(tmp3).calendar();
    const obj4 = importDefault(3712)(tmp3);
  }
  return str;
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  const _require = channel;
  let obj = _require(11628);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = {};
  const items = [_isNativeReflectConstruct];
  obj.lastMessageId = _require(566).useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  const tmp3 = getMessageTimestampForChannel(obj);
  let str = "";
  if (null != tmp3) {
    str = _require(7023).getTimestampString(tmp3);
    const obj4 = _require(7023);
  }
  return str;
};
