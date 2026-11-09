// Module ID: 11700
// Function ID: 11701
// Name: useChatWidth
// Dependencies: [19, 11701, 5317, 5319, 11702, 2]
// Exports: default

// Module 11700 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5317 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5319 */;
import reactDefault from "react" /* 11701 */;
import useDrawerWidth from "useDrawerWidth" /* 11702 */;
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
