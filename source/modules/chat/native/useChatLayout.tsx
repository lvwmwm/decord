// Module ID: 4019
// Function ID: 33197
// Name: useChatLayout
// Dependencies: [31, 4020, 2]
// Exports: default, getChatLayout

// Module 4019 (useChatLayout)
import result from "result";

let require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = importDefault(4020)();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = require(4020) /* calculateFromWidth */;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= require(4020) /* calculateFromWidth */.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= require(4020) /* calculateFromWidth */.WindowSizeClassifier.XLARGE };
  return obj;
};
