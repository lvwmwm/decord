// Module ID: 8266
// Function ID: 66146
// Name: BottomSheetTextInput
// Dependencies: [31, 33, 6724, 6722, 8267, 2]
// Exports: BottomSheetTextInput

// Module 8266 (BottomSheetTextInput)
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
  ({ onFocus: onFocus2, onBlur: onBlur2 } = ref(6724)({ onFocus, onBlur }));
  const tmp4 = ref(6724)({ onFocus, onBlur });
  const keyboardBlurring = ref(6722).useKeyboardBlurring(ref);
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
  const obj2 = ref(6722);
  const merged1 = Object.assign(merged);
  return jsx(ref(8267), {
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
