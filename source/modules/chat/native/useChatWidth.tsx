// Module ID: 10849
// Function ID: 84174
// Name: useChatWidth
// Dependencies: [31, 3984, 3986, 10850, 10851, 2]
// Exports: default, getChatWidth

// Module 10849 (useChatWidth)
import result from "result";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10851));
  const width = importDefault(3986)().width;
  require(10850) /* computeTabletDrawerWidth */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(3984)().isChatLockedOpen) {
        diff = width - tmp3;
      }
      let tmp4 = diff;
    } else {
      tmp4 = width;
    }
    context = tmp4;
  }
  return context;
};
export const getChatWidth = function getChatWidth(arg0) {
  const obj = require(3984) /* useChatLayout */;
  const width = require(3986) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - require(10850) /* computeTabletDrawerWidth */.getDrawerWidth();
      const obj3 = require(10850) /* computeTabletDrawerWidth */;
    }
    let tmp = diff;
  } else {
    tmp = width;
  }
  return tmp;
};
