// Module ID: 5785
// Function ID: 49504
// Name: useBottomSheetKeyboardHandling
// Dependencies: [31, 5189, 2]
// Exports: default

// Module 5785 (useBottomSheetKeyboardHandling)
import result from "result";

const require = arg1;
let result = require("set").fileFinishedImporting("design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx");

export default function useBottomSheetKeyboardHandling(onFocus) {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  const bottomSheetInternal = onFocus(onBlur[1]).useBottomSheetInternal(true);
  const items = [bottomSheetInternal, onBlur, onFocus];
  return bottomSheetInternal.useMemo(() => {
    if (null == bottomSheetInternal) {
      let obj = { onFocus, onBlur };
    } else {
      obj = {
        onFocus(arg0) {
            const shouldHandleKeyboardEvents = outer1_2.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(true);
            if (null != outer1_0) {
              outer1_0(arg0);
            }
          },
        onBlur(arg0) {
            const shouldHandleKeyboardEvents = outer1_2.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(false);
            if (null != outer1_1) {
              outer1_1(arg0);
            }
          }
      };
    }
    return obj;
  }, items);
};
