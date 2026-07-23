// Module ID: 8426
// Function ID: 67156
// Name: BottomSheetTextInput
// Dependencies: [31, 33, 5785, 5783, 8427, 2]
// Exports: BottomSheetTextInput

// Module 8426 (BottomSheetTextInput)
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
  ({ onFocus: onFocus2, onBlur: onBlur2 } = ref(5785)({ onFocus, onBlur }));
  const tmp4 = ref(5785)({ onFocus, onBlur });
  const keyboardBlurring = ref(5783).useKeyboardBlurring(ref);
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
  const obj2 = ref(5783);
  const merged1 = Object.assign(merged);
  return jsx(ref(8427), {
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
