// Module ID: 14749
// Function ID: 112513
// Name: useFocusRefOnNavigation
// Dependencies: [31, 1457, 5584, 2]
// Exports: default

// Module 14749 (useFocusRefOnNavigation)
import result from "result";

const require = arg1;
const result = require("runAfterInteractions").fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

export default function useFocusRefOnNavigation(inputRef) {
  inputRef = inputRef.inputRef;
  let flag = inputRef.enabled;
  if (flag === undefined) {
    flag = true;
  }
  let isFocused;
  isFocused = inputRef(flag[1]).useIsFocused();
  const items = [flag, inputRef, isFocused];
  const effect = isFocused.useEffect(() => {
    let closure_0 = inputRef(flag[2]).runAfterInteractions(() => {
      let tmp = outer1_1;
      if (outer1_1) {
        tmp = outer1_2;
      }
      if (tmp) {
        const current = ref.current;
        if (null != current) {
          current.focus();
        }
      }
    });
    return () => {
      ref.cancel();
    };
  }, items);
};
