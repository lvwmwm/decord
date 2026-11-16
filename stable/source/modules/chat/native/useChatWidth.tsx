// Module ID: 11732
// Function ID: 11733
// Name: useChatWidth
// Dependencies: [19, 11733, 5349, 5351, 11734, 2]
// Exports: default

// Module 11732 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5349 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5351 */;
import reactDefault from "react" /* 11733 */;
import useDrawerWidth from "useDrawerWidth" /* 11734 */;
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
