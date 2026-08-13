// Module ID: 9059
// Function ID: 9060
// Name: BottomSheetTextInput
// Dependencies: [19, 21, 6048, 6046, 9060, 2]
// Exports: BottomSheetTextInput

// Module 9059 (BottomSheetTextInput)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useBottomSheetKeyboardHandling").fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = function BottomSheetTextInput(ref) {
  let onBlur;
  let onBlur2;
  let onFocus;
  let onFocus2;
  ref = ref.ref;
  ({ onFocus, onBlur } = ref);
  ref = undefined;
  const merged = Object.assign(ref, Object.create(null));
  ref = React.useRef(null);
  ({ onFocus: onFocus2, onBlur: onBlur2 } = ref(6048)({ onFocus, onBlur }));
  let obj = ref(6046);
  const keyboardBlurring = obj.useKeyboardBlurring(ref);
  obj = {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  };
  const tmp3 = ref(6048)({ onFocus, onBlur });
  const merged1 = Object.assign(merged);
  return jsx(ref(9060), {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  });
};
