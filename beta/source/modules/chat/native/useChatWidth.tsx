// Module ID: 11731
// Function ID: 11732
// Name: useChatWidth
// Dependencies: [19, 11732, 5349, 5351, 11733, 2]
// Exports: default

// Module 11731 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5349 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5351 */;
import reactDefault from "react" /* 11732 */;
import useDrawerWidth from "useDrawerWidth" /* 11733 */;
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
