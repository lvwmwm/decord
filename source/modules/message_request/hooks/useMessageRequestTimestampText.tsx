// Module ID: 15698
// Function ID: 15699
// Name: useMessageRequestTimestampText
// Dependencies: [4201, 11, 11684, 589, 3771, 6090, 2]
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 15698 (useMessageRequestTimestampText)
import generateOldThreadCutoff from "generateOldThreadCutoff";

const require = arg1;
const result = require("loadMessageRequestData").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  let lastMessageId;
  let message;
  const _require = channel;
  let obj = _require(11684);
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
      str = importDefault(3771)(extractTimestampResult).calendar();
      const obj6 = importDefault(3771)(extractTimestampResult);
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
  let obj = _require(11684);
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
      str = _require(6090).getTimestampString(extractTimestampResult);
      const tmpResult = _require(6090);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = importDefault(11).extractTimestamp(lastMessageId);
    const obj4 = importDefault(11);
  }
};
