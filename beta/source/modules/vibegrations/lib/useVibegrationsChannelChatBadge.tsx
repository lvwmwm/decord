// Module ID: 13598
// Function ID: 13599
// Name: useVibegrationsChannelChatBadge
// Dependencies: [4805, 558, 568, 504, 2]

// Module 13598 (useVibegrationsChannelChatBadge)
import ReadStateStore from "ReadStateStore" /* 4805 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelChatBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const mentionCount = ReadStateStore.getMentionCount(closure_0);
      if (mentionCount > 0) {
        const obj2 = { badge: "mention", mentionCount };
        let obj4 = obj2;
      } else if (ReadStateStore.hasUnread(closure_0)) {
        const obj3 = { badge: "unread", mentionCount };
        obj4 = obj3;
      } else {
        obj4 = { badge: null, mentionCount };
      }
      return obj4;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const mentionCount = ReadStateStore.getMentionCount(closure_0);
    if (mentionCount > 0) {
      const obj2 = { badge: "mention", mentionCount };
      let obj4 = obj2;
    } else if (ReadStateStore.hasUnread(closure_0)) {
      const obj3 = { badge: "unread", mentionCount };
      obj4 = obj3;
    } else {
      obj4 = { badge: null, mentionCount };
    }
    return obj4;
  }, items1);
});
