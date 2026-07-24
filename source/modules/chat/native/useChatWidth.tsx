// Module ID: 10876
// Function ID: 84363
// Name: useChatWidth
// Dependencies: [31, 3984, 3986, 10877, 10878, 2]
// Exports: default, getChatWidth

// Module 10876 (useChatWidth)
import result from "result";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10878));
  const width = importDefault(3986)().width;
  require(10877) /* computeTabletDrawerWidth */;
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
      diff = width - require(10877) /* computeTabletDrawerWidth */.getDrawerWidth();
      const obj3 = require(10877) /* computeTabletDrawerWidth */;
    }
    let tmp = diff;
  } else {
    tmp = width;
  }
  return tmp;
};
