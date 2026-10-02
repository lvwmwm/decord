// Module ID: 12830
// Function ID: 12831
// Name: useVibegrationsChannelChatBadge
// Dependencies: [4852, 558, 576, 504, 2]

// Module 12830 (useVibegrationsChannelChatBadge)
import ReadStateStore from "ReadStateStore" /* 4852 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let obj4;
      const mentionCount = ReadStateStore.getMentionCount(closure_0);
      const obj = ReadStateStore;
      const tmp = closure_0;
      if (mentionCount > 0) {
        obj4 = { badge: "mention", mentionCount };
        const obj2 = { badge: "mention", mentionCount };
      } else if (obj.hasUnread(tmp)) {
        obj4 = { badge: "unread", mentionCount };
        const obj3 = { badge: "unread", mentionCount };
      } else {
        obj4 = { badge: null, mentionCount };
      }
      return obj4;
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
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let obj4;
    const mentionCount = ReadStateStore.getMentionCount(closure_0);
    const obj = ReadStateStore;
    const tmp = closure_0;
    if (mentionCount > 0) {
      obj4 = { badge: "mention", mentionCount };
      const obj2 = { badge: "mention", mentionCount };
    } else if (obj.hasUnread(tmp)) {
      obj4 = { badge: "unread", mentionCount };
      const obj3 = { badge: "unread", mentionCount };
    } else {
      obj4 = { badge: null, mentionCount };
    }
    return obj4;
  }, items1);
});
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelChatBadge.tsx");

export default tmp2;
