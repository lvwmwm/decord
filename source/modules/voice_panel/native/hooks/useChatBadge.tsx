// Module ID: 15687
// Function ID: 119828
// Name: useChatBadge
// Dependencies: []
// Exports: default

// Module 15687 (useChatBadge)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default function useChatBadge(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let str = "mention";
    if (closure_2.getMentionCount(arg0) <= 0) {
      let str2 = null;
      if (closure_2.hasUnread(arg0)) {
        str2 = "unread";
      }
      str = str2;
    }
    return str;
  });
};
