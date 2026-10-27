// Module ID: 5574
// Function ID: 5575
// Dependencies: [19, 21, 5275, 5298]

// Module 5574
import Fragment from "Fragment" /* 21 */;
import _mod5275 from "module_5275" /* 5275 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
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
  const obj = _mod5275;
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
