// Module ID: 15859
// Function ID: 122366
// Name: useChatBadge
// Dependencies: [4142, 566, 2]
// Exports: default

// Module 15859 (useChatBadge)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default function useChatBadge(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let str = "mention";
    if (outer1_2.getMentionCount(closure_0) <= 0) {
      let str2 = null;
      if (outer1_2.hasUnread(closure_0)) {
        str2 = "unread";
      }
      str = str2;
    }
    return str;
  });
};
