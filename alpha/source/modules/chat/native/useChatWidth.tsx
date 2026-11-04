// Module ID: 11743
// Function ID: 11744
// Name: useChatWidth
// Dependencies: [19, 11744, 5325, 5327, 11745, 2]
// Exports: default

// Module 11743 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5325 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5327 */;
import reactDefault from "react" /* 11744 */;
import useDrawerWidth from "useDrawerWidth" /* 11745 */;
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
