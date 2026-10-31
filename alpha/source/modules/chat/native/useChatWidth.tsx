// Module ID: 11554
// Function ID: 11555
// Name: useChatWidth
// Dependencies: [19, 11555, 5201, 5203, 11556, 2]
// Exports: default

// Module 11554 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 5201 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5203 */;
import reactDefault from "react" /* 11555 */;
import useDrawerWidth from "useDrawerWidth" /* 11556 */;
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
