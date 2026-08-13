// Module ID: 10970
// Function ID: 10971
// Name: useChatWidth
// Dependencies: [19, 4200, 4202, 10971, 10972, 2]
// Exports: default, getChatWidth

// Module 10970 (useChatWidth)
import noop from "noop";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10972));
  const width = importDefault(4202)().width;
  require(10971) /* sum */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(4200)().isChatLockedOpen) {
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
  const obj = require(4200) /* useChatLayout */;
  const tmp = require;
  const width = require(4202) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - tmp(10971).getDrawerWidth();
      const tmpResult = tmp(10971);
    }
    let tmp3 = diff;
  } else {
    tmp3 = width;
  }
  return tmp3;
};
