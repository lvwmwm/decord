// Module ID: 5437
// Function ID: 46547
// Name: memo
// Dependencies: [29, 31, 33, 5194, 5217]

// Module 5437 (memo)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let forwardRef;
let memo;
const require = arg1;
let closure_2 = ["onFocus", "onBlur"];
({ useCallback: closure_4, useEffect: closure_5, memo, forwardRef } = result);
const memoResult = memo(forwardRef((onFocus, ref) => {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let obj = onFocus(onBlur[3]);
  const shouldHandleKeyboardEvents = obj.useBottomSheetInternal().shouldHandleKeyboardEvents;
  const items = [onFocus, shouldHandleKeyboardEvents];
  const items1 = [onBlur, shouldHandleKeyboardEvents];
  const tmp = callback(onFocus, shouldHandleKeyboardEvents);
  const items2 = [shouldHandleKeyboardEvents];
  const tmp2 = callback2((arg0) => {
    shouldHandleKeyboardEvents.value = true;
    if (onFocus) {
      onFocus(arg0);
    }
  }, items);
  callback3(() => () => {
    outer1_2.value = false;
  }, items2);
  obj = {
    ref,
    onFocus: tmp2,
    onBlur: callback2((arg0) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        onBlur(arg0);
      }
    }, items1)
  };
  return jsx(onFocus(onBlur[4]).TextInput, Object.assign(obj, tmp));
}));
memoResult.displayName = "BottomSheetTextInput";

export default memoResult;
