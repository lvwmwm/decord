// Module ID: 8228
// Function ID: 66035
// Name: BottomSheetTextInput
// Dependencies: [31, 33, 6688, 6686, 8229, 2]
// Exports: BottomSheetTextInput

// Module 8228 (BottomSheetTextInput)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useBottomSheetKeyboardHandling").fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = function BottomSheetTextInput(ref) {
  let onBlur;
  let onBlur2;
  let onFocus;
  let onFocus2;
  ref = ref.ref;
  let obj = { onFocus: 0, onBlur: 0, ref: 0 };
  ({ onFocus, onBlur } = ref);
  Object.setPrototypeOf(null);
  const merged = Object.assign(ref, obj);
  ref = React.useRef(null);
  ({ onFocus: onFocus2, onBlur: onBlur2 } = ref(6688)({ onFocus, onBlur }));
  const tmp4 = ref(6688)({ onFocus, onBlur });
  const keyboardBlurring = ref(6686).useKeyboardBlurring(ref);
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
  const obj2 = ref(6686);
  const merged1 = Object.assign(merged);
  return jsx(ref(8229), {
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
  });
};
