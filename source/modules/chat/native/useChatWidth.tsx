// Module ID: 10929
// Function ID: 10930
// Name: useChatWidth
// Dependencies: [19, 4155, 4157, 10930, 10931, 2]
// Exports: default, getChatWidth

// Module 10929 (useChatWidth)
import noop from "noop";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10931));
  const width = importDefault(4157)().width;
  require(10930) /* sum */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(4155)().isChatLockedOpen) {
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
  const obj = require(4155) /* useChatLayout */;
  const tmp = require;
  const width = require(4157) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(10930).getDrawerWidth();
      const tmpResult = tmp(10930);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
