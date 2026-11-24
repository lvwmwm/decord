// Module ID: 11835
// Function ID: 11836
// Name: useChatWidth
// Dependencies: [19, 11836, 5096, 5098, 11837, 2]
// Exports: default

// Module 11835 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5096 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5098 */;
import reactDefault from "react" /* 11836 */;
import useDrawerWidth from "useDrawerWidth" /* 11837 */;
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
