// Module ID: 11126
// Function ID: 11127
// Name: useChatWidth
// Dependencies: [19, 5114, 5116, 11127, 558, 11128, 2]
// Exports: getChatWidth

// Module 11126 (useChatWidth)
import useChatLayout from "useChatLayout" /* 5114 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 5116 */;
import useDrawerWidth from "useDrawerWidth" /* 11127 */;
import reactDefault from "react" /* 11128 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChatWidth(arg0) {
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
}) : (function useChatWidth(arg0) {
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
});
const result = size.fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default tmp2;
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
