// Module ID: 11890
// Function ID: 11891
// Name: useChatWidth
// Dependencies: [19, 11891, 4971, 4973, 11892, 2]
// Exports: default

// Module 11890 (useChatWidth)
import useChatLayoutDefault from "useChatLayout" /* 4971 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4973 */;
import reactDefault from "react" /* 11891 */;
import useDrawerWidth from "useDrawerWidth" /* 11892 */;
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
