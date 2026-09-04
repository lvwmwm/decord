// Module ID: 11459
// Function ID: 11460
// Name: useChatWidth
// Dependencies: [19, 4338, 4340, 11460, 11461, 2]
// Exports: default, getChatWidth

// Module 11459 (useChatWidth)
import useChatLayout from "useChatLayout" /* 4338 */;
import useChatLayoutDefault from "useChatLayout" /* 4338 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4340 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4340 */;
import sum from "sum" /* 11460 */;
import contextDefault from "context" /* 11461 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(contextDefault);
  const width = useBaseAppContainerDimensionsDefault().width;
  sum;
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
};
export const getChatWidth = function getChatWidth(arg0) {
  const obj = useChatLayout;
  const tmp = require;
  const width = useBaseAppContainerDimensions.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - sum.getDrawerWidth();
      const tmpResult = sum;
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
