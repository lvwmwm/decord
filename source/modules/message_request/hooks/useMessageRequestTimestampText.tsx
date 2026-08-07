// Module ID: 15866
// Function ID: 15867
// Name: useMessageRequestTimestampText
// Dependencies: [4314, 11, 11886, 589, 3883, 7180, 2]
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 15866 (useMessageRequestTimestampText)
import generateOldThreadCutoff from "generateOldThreadCutoff";

const require = arg1;
const result = require("loadMessageRequestData").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  let lastMessageId;
  let message;
  const _require = channel;
  let obj = _require(11886);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [generateOldThreadCutoff];
  obj[0] = _require(589).useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = importDefault(11).extractTimestamp(message.id);
      const obj5 = importDefault(11);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = importDefault(3883)(extractTimestampResult).calendar();
      const obj6 = importDefault(3883)(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = importDefault(11).extractTimestamp(lastMessageId);
    const obj4 = importDefault(11);
  }
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  let lastMessageId;
  let message;
  const _require = channel;
  let obj = _require(11886);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [generateOldThreadCutoff];
  obj[0] = _require(589).useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = importDefault(11).extractTimestamp(message.id);
      const obj5 = importDefault(11);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = _require(7180).getTimestampString(extractTimestampResult);
      const tmpResult = _require(7180);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = importDefault(11).extractTimestamp(lastMessageId);
    const obj4 = importDefault(11);
  }
};
