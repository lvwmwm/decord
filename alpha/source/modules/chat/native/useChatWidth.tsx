// Module ID: 11317
// Function ID: 11318
// Name: useChatWidth
// Dependencies: [19, 558, 576, 11318, 5190, 5192, 11319, 2]

// Module 11317 (useChatWidth)
import react2 from "react" /* 576 */;
import useChatLayoutDefault from "useChatLayout" /* 5190 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5192 */;
import reactDefault from "react" /* 11318 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useDrawerWidth = tmp(11319);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChatWidth(arg0) {
  const obj = react2;
  const cResult = obj.c(1);
  let context = react.useContext(reactDefault);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const width = useBaseAppContainerDimensionsDefault().width;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { whileSliding: "narrower" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  useDrawerWidth;
  if (null == context) {
    let tmp9;
    if (null == arg0) {
      let diff = width;
      if (isChatLockedOpen) {
        diff = width - tmp7;
      }
      tmp9 = diff;
    } else {
      tmp9 = width;
    }
    context = tmp9;
  }
  return context;
}) : (function useChatWidth(arg0) {
  let context = react.useContext(reactDefault);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const width = useBaseAppContainerDimensionsDefault().width;
  useDrawerWidth;
  if (null == context) {
    let tmp5;
    if (null == arg0) {
      let diff = width;
      if (isChatLockedOpen) {
        diff = width - tmp3;
      }
      tmp5 = diff;
    } else {
      tmp5 = width;
    }
    context = tmp5;
  }
  return context;
});
const result = size.fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default tmp2;
