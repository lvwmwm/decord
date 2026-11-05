// Module ID: 5327
// Function ID: 5328
// Name: useChatLayout
// Dependencies: [19, 5328, 2]
// Exports: default, getChatLayout

// Module 5327 (useChatLayout)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5328 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = useWindowSizeClassifierDefault();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => {
    const obj = { isChatBesideChannelList: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE };
    return obj;
  }, items);
};
export function getChatLayout() {
  const obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  const obj2 = { isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE };
  return obj2;
}
