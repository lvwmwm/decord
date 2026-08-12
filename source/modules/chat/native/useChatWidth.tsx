// Module ID: 11054
// Function ID: 11055
// Name: useChatWidth
// Dependencies: [19, 4202, 4204, 11055, 11056, 2]
// Exports: default, getChatWidth

// Module 11054 (useChatWidth)
import noop from "noop";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(11056));
  const width = importDefault(4204)().width;
  require(11055) /* sum */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(4202)().isChatLockedOpen) {
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
  const obj = require(4202) /* useChatLayout */;
  const tmp = require;
  const width = require(4204) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(11055).getDrawerWidth();
      const tmpResult = tmp(11055);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
