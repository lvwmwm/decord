// Module ID: 16055
// Function ID: 16056
// Name: useChatBadge
// Dependencies: [4267, 589, 2]
// Exports: default

// Module 16055 (useChatBadge)
import generateOldThreadCutoff from "generateOldThreadCutoff";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default function useChatBadge(arg0) {
  const _require = arg0;
  const items = [generateOldThreadCutoff];
  return _require(589).useStateFromStores(items, () => {
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
