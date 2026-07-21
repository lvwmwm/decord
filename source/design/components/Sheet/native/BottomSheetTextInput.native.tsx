// Module ID: 8419
// Function ID: 67107
// Name: BottomSheetTextInput
// Dependencies: [0, 0, 4294967295, 0, 0, 0]
// Exports: BottomSheetTextInput

// Module 8419 (BottomSheetTextInput)
import closure_3 from "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = function BottomSheetTextInput(ref) {
  let onBlur;
  let onBlur2;
  let onFocus;
  let onFocus2;
  const arg1 = ref.ref;
  let obj = { -1411405115: false, 1045705639: false, -977753741: false };
  ({ onFocus, onBlur } = ref);
  Object.setPrototypeOf(null);
  const merged = Object.assign(ref, obj);
  ref = React.useRef(null);
  const importDefault = ref;
  ({ onFocus: onFocus2, onBlur: onBlur2 } = importDefault(dependencyMap[2])({ onFocus, onBlur }));
  const tmp4 = importDefault(dependencyMap[2])({ onFocus, onBlur });
  const keyboardBlurring = arg1(dependencyMap[3]).useKeyboardBlurring(ref);
  obj = {
    ref(current) {
      ref.current = current;
      if ("function" === typeof ref) {
        ref(current);
      } else if (null != ref) {
        ref.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  };
  const obj2 = arg1(dependencyMap[3]);
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[4]), obj);
};
