// Module ID: 12627
// Function ID: 12628
// Name: useChatWidth
// Dependencies: [19, 12628, 5489, 5491, 12629, 2]
// Exports: default

// Module 12627 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5489 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5491 */;
import reactDefault from "react" /* 12628 */;
import useDrawerWidth from "useDrawerWidth" /* 12629 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = react.useContext(reactDefault);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const width = useBaseAppContainerDimensionsDefault().width;
  useDrawerWidth;
  if (null == context) {
    let tmp5;
    if (null == arg0) {
      let diff = width;
      if (isChatLockedOpen) {
        diff = width - tmp3;
      }
      tmp5 = diff;
    } else {
      tmp5 = width;
    }
    context = tmp5;
  }
  return context;
};
