// Module ID: 3985
// Function ID: 33095
// Name: useChatLayout
// Dependencies: [31, 3986, 2]
// Exports: default, getChatLayout

// Module 3985 (useChatLayout)
import result from "result";

let require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = importDefault(3986)();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = require(3986) /* calculateFromWidth */;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= require(3986) /* calculateFromWidth */.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= require(3986) /* calculateFromWidth */.WindowSizeClassifier.XLARGE };
  return obj;
};
