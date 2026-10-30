// Module ID: 11520
// Function ID: 11521
// Name: useChatWidth
// Dependencies: [19, 11521, 5196, 5198, 11522, 2]
// Exports: default

// Module 11520 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5196 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5198 */;
import reactDefault from "react" /* 11521 */;
import useDrawerWidth from "useDrawerWidth" /* 11522 */;
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
