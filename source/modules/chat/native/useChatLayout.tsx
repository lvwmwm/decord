// Module ID: 4138
// Function ID: 4139
// Name: useChatLayout
// Dependencies: [19, 4139, 2]
// Exports: default, getChatLayout

// Module 4138 (useChatLayout)
import noop from "noop";

let require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = importDefault(4139)();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = require(4139) /* useWindowSizeClassifier */;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= require(4139) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= require(4139) /* useWindowSizeClassifier */.WindowSizeClassifier.XLARGE };
  return obj;
};
