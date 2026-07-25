// Module ID: 10826
// Function ID: 83953
// Name: useChatWidth
// Dependencies: [31, 3985, 3987, 10827, 10828, 2]
// Exports: default, getChatWidth

// Module 10826 (useChatWidth)
import result from "result";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10828));
  const width = importDefault(3987)().width;
  require(10827) /* computeTabletDrawerWidth */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(3985)().isChatLockedOpen) {
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
  const obj = require(3985) /* useChatLayout */;
  const width = require(3987) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - require(10827) /* computeTabletDrawerWidth */.getDrawerWidth();
      const obj3 = require(10827) /* computeTabletDrawerWidth */;
    }
    let tmp = diff;
  } else {
    tmp = width;
  }
  return tmp;
};
