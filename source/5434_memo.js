// Module ID: 5434
// Function ID: 46523
// Name: memo
// Dependencies: []

// Module 5434 (memo)
let forwardRef;
let memo;
let closure_2 = [1631314769, -1784718911];
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useEffect: closure_5, memo, forwardRef } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = memo(forwardRef((onFocus, ref) => {
  onFocus = onFocus.onFocus;
  ref = onFocus;
  const onBlur = onFocus.onBlur;
  const dependencyMap = onBlur;
  let obj = ref(dependencyMap[3]);
  const shouldHandleKeyboardEvents = obj.useBottomSheetInternal().shouldHandleKeyboardEvents;
  let closure_2 = shouldHandleKeyboardEvents;
  const items = [onFocus, shouldHandleKeyboardEvents];
  const items1 = [onBlur, shouldHandleKeyboardEvents];
  const tmp = callback(onFocus, closure_2);
  const items2 = [shouldHandleKeyboardEvents];
  const tmp2 = callback2((arg0) => {
    shouldHandleKeyboardEvents.value = true;
    if (onFocus) {
      onFocus(arg0);
    }
  }, items);
  callback3(() => () => {
    closure_2.value = false;
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
  return jsx(ref(dependencyMap[4]).TextInput, Object.assign(obj, tmp));
}));
memoResult.displayName = "BottomSheetTextInput";

export default memoResult;
