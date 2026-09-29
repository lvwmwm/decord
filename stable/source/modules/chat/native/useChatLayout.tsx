// Module ID: 4648
// Function ID: 4649
// Name: useChatLayout
// Dependencies: [19, 4649, 2]
// Exports: default, getChatLayout

// Module 4648 (useChatLayout)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4649 */;
import noop from "module_19" /* 19 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = useWindowSizeClassifierDefault();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => ({ isChatBesideChannelList: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return { isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE };
};
