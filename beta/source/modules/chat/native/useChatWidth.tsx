// Module ID: 11020
// Function ID: 11021
// Name: useChatWidth
// Dependencies: [19, 4695, 4697, 11021, 11022, 2]
// Exports: default, getChatWidth

// Module 11020 (useChatWidth)
import useChatLayout from "useChatLayout" /* 4695 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4697 */;
import useDrawerWidth from "useDrawerWidth" /* 11021 */;
import reactDefault from "react" /* 11022 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

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
export const getChatWidth = function getChatWidth(arg0) {
  let tmp3;
  const obj = useChatLayout;
  const isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
  const obj2 = useBaseAppContainerDimensions;
  const width = obj2.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (isChatLockedOpen) {
      const tmpResult = useDrawerWidth;
      diff = width - tmpResult.getDrawerWidth();
    }
    tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
