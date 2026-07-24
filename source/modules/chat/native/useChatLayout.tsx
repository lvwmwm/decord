// Module ID: 3984
// Function ID: 33083
// Name: useChatLayout
// Dependencies: [31, 3985, 2]
// Exports: default, getChatLayout

// Module 3984 (useChatLayout)
import result from "result";

let require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = importDefault(3985)();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = require(3985) /* calculateFromWidth */;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= require(3985) /* calculateFromWidth */.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= require(3985) /* calculateFromWidth */.WindowSizeClassifier.XLARGE };
  return obj;
};
