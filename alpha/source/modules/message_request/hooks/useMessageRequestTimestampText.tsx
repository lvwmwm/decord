// Module ID: 19551
// Function ID: 19552
// Name: useMessageRequestTimestampText
// Dependencies: [6952, 11, 14806, 504, 2166, 8941, 2]
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 19551 (useMessageRequestTimestampText)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef2166 from "module_2166" /* 2166 */;
import ReadStateStore from "ReadStateStore" /* 6952 */;
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
      const obj6 = _modDef2166(extractTimestampResult);
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
      const tmpResult = tmp(8941);
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
