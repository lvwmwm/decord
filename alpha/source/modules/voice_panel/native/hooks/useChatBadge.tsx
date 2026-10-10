// Module ID: 17803
// Function ID: 17804
// Name: useChatBadge
// Dependencies: [6035, 558, 576, 504, 2]

// Module 17803 (useChatBadge)
import ReadStateStore from "ReadStateStore" /* 6035 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChatBadge(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let str = "mention";
      const obj = ReadStateStore;
      const tmp = closure_0;
      if (ReadStateStore.getMentionCount(closure_0) <= 0) {
        let str2 = null;
        if (obj.hasUnread(tmp)) {
          str2 = "unread";
        }
        str = str2;
      }
      return str;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useChatBadge(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  return obj.useStateFromStores(items, () => {
    let str = "mention";
    const obj = ReadStateStore;
    const tmp = closure_0;
    if (ReadStateStore.getMentionCount(closure_0) <= 0) {
      let str2 = null;
      if (obj.hasUnread(tmp)) {
        str2 = "unread";
      }
      str = str2;
    }
    return str;
  });
});
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default tmp2;
