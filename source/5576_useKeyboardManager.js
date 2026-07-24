// Module ID: 5576
// Function ID: 47382
// Name: useKeyboardManager
// Dependencies: [31, 27]
// Exports: default

// Module 5576 (useKeyboardManager)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let closure_1;
let closure_2;
({ Keyboard: closure_1, TextInput: closure_2 } = get_ActivityIndicator);

export default function useKeyboardManager(arg0) {
  const React = arg0;
  let closure_1 = React.useRef(undefined);
  let closure_2 = React.useRef(0);
  let closure_3 = React.useRef();
  const callback = React.useCallback(() => {
    if (undefined !== ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref3.current);
      ref3.current = undefined;
    }
  }, []);
  const items = [callback, arg0];
  const items1 = [callback, arg0];
  const onPageChangeStart = React.useCallback(() => {
    if (callback()) {
      callback();
      const State = ref2.State;
      const result = State.currentlyFocusedInput();
      if (null != result) {
        result.blur();
      }
      closure_1.current = result;
      const _Date = Date;
      ref2.current = Date.now();
    }
  }, items);
  const items2 = [callback, arg0];
  const onPageChangeConfirm = React.useCallback((arg0) => {
    if (callback()) {
      callback();
      if (arg0) {
        ref.dismiss();
      } else {
        const current = ref.current;
        if (null != current) {
          current.blur();
        }
      }
      ref.current = undefined;
    }
  }, items1);
  const items3 = [callback];
  const onPageChangeCancel = React.useCallback(() => {
    if (current()) {
      callback();
      current = ref.current;
      if (current) {
        const _Date = Date;
        if (Date.now() - ref2.current < 100) {
          const _setTimeout = setTimeout;
          closure_3.current = setTimeout(() => {
            if (null != current) {
              current.focus();
            }
            outer1_1.current = undefined;
          }, 100);
        } else {
          if (null != current) {
            current.focus();
          }
          ref.current = undefined;
        }
      }
    }
  }, items2);
  const effect = React.useEffect(() => () => outer1_4(), items3);
  return { onPageChangeStart, onPageChangeConfirm, onPageChangeCancel };
};
