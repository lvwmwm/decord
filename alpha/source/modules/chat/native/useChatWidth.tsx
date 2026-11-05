// Module ID: 11752
// Function ID: 11753
// Name: useChatWidth
// Dependencies: [19, 11753, 5327, 5329, 11754, 2]
// Exports: default

// Module 11752 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5327 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5329 */;
import reactDefault from "react" /* 11753 */;
import useDrawerWidth from "useDrawerWidth" /* 11754 */;
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
