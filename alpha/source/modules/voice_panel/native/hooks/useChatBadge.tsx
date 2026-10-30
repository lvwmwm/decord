// Module ID: 19186
// Function ID: 19187
// Name: useChatBadge
// Dependencies: [6836, 504, 2]
// Exports: default

// Module 19186 (useChatBadge)
import ReadStateStore from "ReadStateStore" /* 6836 */;
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
