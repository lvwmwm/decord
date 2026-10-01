// Module ID: 4724
// Function ID: 4725
// Name: useChatLayout
// Dependencies: [19, 4725, 2]
// Exports: default, getChatLayout

// Module 4724 (useChatLayout)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4725 */;
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
