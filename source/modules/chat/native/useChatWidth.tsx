// Module ID: 10889
// Function ID: 10890
// Name: useChatWidth
// Dependencies: [19, 4043, 4045, 10890, 10891, 2]
// Exports: default, getChatWidth

// Module 10889 (useChatWidth)
import noop from "noop";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10891));
  const width = importDefault(4045)().width;
  require(10890) /* sum */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(4043)().isChatLockedOpen) {
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
  const obj = require(4043) /* useChatLayout */;
  const tmp = require;
  const width = require(4045) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(10890).getDrawerWidth();
      const tmpResult = tmp(10890);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
