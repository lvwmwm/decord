// Module ID: 9552
// Function ID: 9553
// Name: useChannelChatUnread
// Dependencies: [6254, 558, 576, 504, 2]

// Module 9552 (useChannelChatUnread)
import ReadStateStore from "ReadStateStore" /* 6254 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelChatUnread(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let num;
      const obj = { hasUnread: null != closure_0 && ReadStateStore.hasUnread(tmp), mentionCount: num };
      num = 0;
      if (null != closure_0) {
        num = ReadStateStore.getMentionCount(tmp);
      }
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
}) : (function useChannelChatUnread(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let num;
    const obj = { hasUnread: null != closure_0 && ReadStateStore.hasUnread(tmp), mentionCount: num };
    num = 0;
    if (null != closure_0) {
      num = ReadStateStore.getMentionCount(tmp);
    }
    return obj;
  }, items1);
});
const result = size.fileFinishedImporting("modules/header_bar/useChannelChatUnread.tsx");

export const useChannelChatUnread = tmp2;
