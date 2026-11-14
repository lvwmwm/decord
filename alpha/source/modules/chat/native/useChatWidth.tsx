// Module ID: 12421
// Function ID: 12422
// Name: useChatWidth
// Dependencies: [19, 12422, 5495, 5497, 12423, 2]
// Exports: default

// Module 12421 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5495 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5497 */;
import reactDefault from "react" /* 12422 */;
import useDrawerWidth from "useDrawerWidth" /* 12423 */;
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
