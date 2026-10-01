// Module ID: 13992
// Function ID: 13993
// Name: useFocusRefOnNavigation
// Dependencies: [19, 1486, 6459, 2]
// Exports: default

// Module 13992 (useFocusRefOnNavigation)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

export default function useFocusRefOnNavigation(inputRef) {
  inputRef = inputRef.inputRef;
  let flag = inputRef.enabled;
  if (flag === undefined) {
    flag = true;
  }
  let obj = inputRef(flag[1]);
  const isFocused = obj.useIsFocused();
  const items = [flag, inputRef, isFocused];
  const effect = isFocused.useEffect(() => {
    const obj = inputRef(flag[2]);
    const ref = obj.runAfterInteractions(() => {
      const tmp = flag && isFocused;
      if (tmp) {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
    });
    return () => {
      ref.cancel();
    };
  }, items);
};
