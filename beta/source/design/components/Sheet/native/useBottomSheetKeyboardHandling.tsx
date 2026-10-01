// Module ID: 6044
// Function ID: 6045
// Name: useBottomSheetKeyboardHandling
// Dependencies: [19, 6045, 2]
// Exports: default

// Module 6044 (useBottomSheetKeyboardHandling)
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx");

export default function useBottomSheetKeyboardHandling(onFocus) {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let obj = BottomSheetModal;
  const bottomSheetInternal = obj.useBottomSheetInternal(true);
  const items = [bottomSheetInternal, onBlur, onFocus];
  return react.useMemo(() => {
    let obj;
    if (null == bottomSheetInternal) {
      const tmp2 = onBlur;
      obj = { onFocus, onBlur };
      const obj2 = { onFocus, onBlur };
    } else {
      obj = {
        onFocus(arg0) {
            const shouldHandleKeyboardEvents = bottomSheetInternal.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(true);
            if (onFocus != null) {
              tmp2(arg0);
            }
          },
        onBlur(arg0) {
            const shouldHandleKeyboardEvents = bottomSheetInternal.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(false);
            if (onBlur != null) {
              tmp2(arg0);
            }
          }
      };
    }
    return obj;
  }, items);
};
