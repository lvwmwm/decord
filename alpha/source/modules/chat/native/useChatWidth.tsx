// Module ID: 11982
// Function ID: 11983
// Name: useChatWidth
// Dependencies: [19, 11983, 5222, 5224, 11984, 2]
// Exports: default

// Module 11982 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5222 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5224 */;
import reactDefault from "react" /* 11983 */;
import useDrawerWidth from "useDrawerWidth" /* 11984 */;
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
