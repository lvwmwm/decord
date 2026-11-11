// Module ID: 12332
// Function ID: 12333
// Name: useChatWidth
// Dependencies: [19, 12333, 5432, 5434, 12334, 2]
// Exports: default

// Module 12332 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5432 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5434 */;
import reactDefault from "react" /* 12333 */;
import useDrawerWidth from "useDrawerWidth" /* 12334 */;
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
