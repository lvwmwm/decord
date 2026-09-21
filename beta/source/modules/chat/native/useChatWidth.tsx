// Module ID: 11647
// Function ID: 11648
// Name: useChatWidth
// Dependencies: [19, 4619, 4621, 11648, 558, 11649, 2]
// Exports: getChatWidth

// Module 11647 (useChatWidth)
import useChatLayout from "useChatLayout" /* 4619 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4621 */;
import useDrawerWidth from "useDrawerWidth" /* 11648 */;
import ChatViewWidthContextDefault from "ChatViewWidthContext" /* 11649 */;
import noop from "module_19" /* 19 */;

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let context = noop.useContext(ChatViewWidthContextDefault);
  const width = useBaseAppContainerDimensionsDefault().width;
  useDrawerWidth;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (useChatLayoutDefault().isChatLockedOpen) {
        diff = width - tmp3;
      }
      let tmp5 = diff;
    } else {
      tmp5 = width;
    }
    context = tmp5;
  }
  return context;
}) : ((arg0) => {
  let context = noop.useContext(ChatViewWidthContextDefault);
  const width = useBaseAppContainerDimensionsDefault().width;
  useDrawerWidth;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (useChatLayoutDefault().isChatLockedOpen) {
        diff = width - tmp3;
      }
      let tmp5 = diff;
    } else {
      tmp5 = width;
    }
    context = tmp5;
  }
  return context;
});
export const getChatWidth = function getChatWidth(arg0) {
  const obj = useChatLayout;
  const width = useBaseAppContainerDimensions.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - useDrawerWidth.getDrawerWidth();
      const tmpResult = useDrawerWidth;
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
