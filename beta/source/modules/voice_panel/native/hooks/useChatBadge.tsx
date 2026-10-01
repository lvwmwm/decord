// Module ID: 16954
// Function ID: 16955
// Name: useChatBadge
// Dependencies: [4851, 504, 2]
// Exports: default

// Module 16954 (useChatBadge)
import ReadStateStore from "ReadStateStore" /* 4851 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default function useChatBadge(arg0) {
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
};
