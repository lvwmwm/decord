// Module ID: 9037
// Function ID: 9038
// Name: Sheet/BottomSheetTextInput
// Dependencies: [19, 21, 6044, 6042, 9038, 2]
// Exports: BottomSheetTextInput

// Module 9037 (Sheet/BottomSheetTextInput)
import Fragment from "Fragment" /* 21 */;
import NativeTextInput from "NativeTextInput" /* 6042 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6044 */;
import void_TextInput_TextInputDefault from "void/TextInput/TextInput" /* 9038 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = function BottomSheetTextInput(ref) {
  let onBlur;
  let onBlur2;
  let onFocus;
  let onFocus2;
  ref = ref.ref;
  ({ onFocus, onBlur } = ref);
  ref = undefined;
  const merged = Object.assign(ref, Object.assign({ onFocus: 0, onBlur: 0, ref: 0 }));
  ref = react.useRef(null);
  ({ onFocus: onFocus2, onBlur: onBlur2 } = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur }));
  const tmp3 = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur });
  const obj = NativeTextInput;
  const keyboardBlurring = obj.useKeyboardBlurring(ref);
  void_TextInput_TextInputDefault;
  const merged1 = Object.assign(merged);
  return <tmp5 ref={function ref(current) {
    ref.current = current;
    if (typeof ref === "function") {
      ref(current);
    } else if (null != ref) {
      ref.current = current;
    }
  }} onFocus={onFocus2} onBlur={onBlur2} />;
};
