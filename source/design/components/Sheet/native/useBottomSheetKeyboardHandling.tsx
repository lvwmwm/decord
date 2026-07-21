// Module ID: 5780
// Function ID: 49445
// Name: useBottomSheetKeyboardHandling
// Dependencies: []
// Exports: default

// Module 5780 (useBottomSheetKeyboardHandling)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("design/components/Sheet/native/useBottomSheetKeyboardHandling.tsx");

export default function useBottomSheetKeyboardHandling(onFocus) {
  onFocus = onFocus.onFocus;
  const arg1 = onFocus;
  const onBlur = onFocus.onBlur;
  const dependencyMap = onBlur;
  const bottomSheetInternal = arg1(dependencyMap[1]).useBottomSheetInternal(true);
  const React = bottomSheetInternal;
  const items = [bottomSheetInternal, onBlur, onFocus];
  return React.useMemo(() => {
    if (null == bottomSheetInternal) {
      let obj = { onFocus, onBlur };
    } else {
      obj = {
        onFocus(arg0) {
            const shouldHandleKeyboardEvents = closure_2.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(true);
            if (null != callback) {
              callback(arg0);
            }
          },
        onBlur(arg0) {
            const shouldHandleKeyboardEvents = closure_2.shouldHandleKeyboardEvents;
            const result = shouldHandleKeyboardEvents.set(false);
            if (null != callback2) {
              callback2(arg0);
            }
          }
      };
    }
    return obj;
  }, items);
};
