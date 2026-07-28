// Module ID: 10865
// Function ID: 84079
// Name: useChatWidth
// Dependencies: [31, 4019, 4021, 10866, 10867, 2]
// Exports: default, getChatWidth

// Module 10865 (useChatWidth)
import result from "result";

const require = arg1;
const result = require("useBaseAppContainerDimensions").fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(10867));
  const width = importDefault(4021)().width;
  require(10866) /* computeTabletDrawerWidth */;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(4019)().isChatLockedOpen) {
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
  const obj = require(4019) /* useChatLayout */;
  const width = require(4021) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - require(10866) /* computeTabletDrawerWidth */.getDrawerWidth();
      const obj3 = require(10866) /* computeTabletDrawerWidth */;
    }
    let tmp = diff;
  } else {
    tmp = width;
  }
  return tmp;
};
