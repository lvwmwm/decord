// Module ID: 17358
// Function ID: 17359
// Name: useMessageRequestTimestampText
// Dependencies: [4772, 11, 12851, 504, 4348, 8026, 2]
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 17358 (useMessageRequestTimestampText)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef4348 from "module_4348" /* 4348 */;
import ReadStateStore from "ReadStateStore" /* 4772 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  _require = channel;
  const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(channel);
  const obj2 = { lastMessageId: null };
  const obj = require("useMessageRequestPreview");
  const items = [ReadStateStore];
  obj2.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj2);
  if (obj2.loaded) {
    if (null != message) {
      let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = _modDef4348(extractTimestampResult).calendar();
      const obj6 = _modDef4348(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  _require = channel;
  const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(channel);
  const obj2 = { lastMessageId: null };
  const obj = require("useMessageRequestPreview");
  const tmp = _require;
  const items = [ReadStateStore];
  obj2.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj2);
  if (obj2.loaded) {
    if (null != message) {
      let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = tmp(8026).getTimestampString(extractTimestampResult);
      const tmpResult = tmp(8026);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
};
