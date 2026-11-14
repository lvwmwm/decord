// Module ID: 19744
// Function ID: 19745
// Name: useMessageRequestTimestampText
// Dependencies: [7015, 11, 14920, 504, 2169, 9008, 2]
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 19744 (useMessageRequestTimestampText)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef2169 from "module_2169" /* 2169 */;
import ReadStateStore from "ReadStateStore" /* 7015 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export function useMessageRequestTimestampText(channel) {
  let extractTimestampResult;
  let items;
  let lastMessageId;
  let message;
  let obj3;
  _require = channel;
  const obj = require("useMessageRequestPreview");
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  const obj2 = { lastMessageId: obj3.useStateFromStores(items, () => ReadStateStore.lastMessageId(channel.id)) };
  items = [ReadStateStore];
  obj3 = require("get initialized");
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj2);
  if (obj2.loaded) {
    if (null != message) {
      const obj5 = SnowflakeUtilsDefault;
      extractTimestampResult = obj5.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      const obj6 = _modDef2169(extractTimestampResult);
      str = obj6.calendar();
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    const obj4 = SnowflakeUtilsDefault;
    extractTimestampResult = obj4.extractTimestamp(lastMessageId);
  }
}
export function useMessageRequestRelativeTimestampText(channel) {
  let extractTimestampResult;
  let items;
  let lastMessageId;
  let message;
  let obj3;
  _require = channel;
  const obj = require("useMessageRequestPreview");
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  const obj2 = { lastMessageId: obj3.useStateFromStores(items, () => ReadStateStore.lastMessageId(channel.id)) };
  items = [ReadStateStore];
  obj3 = require("get initialized");
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj2);
  const tmp = _require;
  if (obj2.loaded) {
    if (null != message) {
      const obj5 = SnowflakeUtilsDefault;
      extractTimestampResult = obj5.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      const tmpResult = tmp(9008);
      str = tmpResult.getTimestampString(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    const obj4 = SnowflakeUtilsDefault;
    extractTimestampResult = obj4.extractTimestamp(lastMessageId);
  }
}
