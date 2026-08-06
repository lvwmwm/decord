// Module ID: 10914
// Function ID: 10915
// Name: useChatWidth
// Dependencies: [19, 4138, 4140, 10915, 10916, 2]
// Exports: default, getChatWidth

// Module 10914 (useChatWidth)
import noop from "noop";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10916));
  const width = importDefault(4140)().width;
  require(10915) /* sum */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(4138)().isChatLockedOpen) {
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
  const obj = require(4138) /* useChatLayout */;
  const tmp = require;
  const width = require(4140) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(10915).getDrawerWidth();
      const tmpResult = tmp(10915);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
