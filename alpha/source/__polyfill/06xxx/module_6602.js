// Module ID: 6602
// Function ID: 6603
// Dependencies: [19, 21, 6303, 6326]

// Module 6602
import Fragment from "Fragment" /* 21 */;
import _mod6303 from "module_6303" /* 6303 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import react_mod from "react" /* 19 */;

let onFocus;

let c2;
let c3;
let forwardRef;
let memo;
let react = react_mod;
({ useCallback: c2, useEffect: c3 } = react);
({ memo, forwardRef } = react);
react = react_mod;
const jsx = Fragment.jsx;
const memoResult = memo(forwardRef((onFocus, ref) => {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  const merged = Object.assign(onFocus, Object.assign({ onFocus: 0, onBlur: 0 }));
  const obj = _mod6303;
  const shouldHandleKeyboardEvents = obj.useBottomSheetInternal().shouldHandleKeyboardEvents;
  const items = [onFocus, shouldHandleKeyboardEvents];
  const items1 = [onBlur, shouldHandleKeyboardEvents];
  const items2 = [shouldHandleKeyboardEvents];
  const tmp2 = React2((arg0) => {
    shouldHandleKeyboardEvents.value = true;
    if (onFocus) {
      tmp(arg0);
    }
  }, items);
  const tmp3 = React2((arg0) => {
    shouldHandleKeyboardEvents.value = false;
    if (onBlur) {
      tmp(arg0);
    }
  }, items1);
  _false(() => () => {
    shouldHandleKeyboardEvents.value = false;
  }, items2);
  const TextInput = LegacyBaseButton.TextInput;
  const merged1 = Object.assign(merged);
  return <TextInput ref={arg1} onFocus={tmp2} onBlur={tmp3} />;
}));
memoResult.displayName = "BottomSheetTextInput";

export default memoResult;
