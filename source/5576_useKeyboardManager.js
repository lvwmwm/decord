// Module ID: 5576
// Function ID: 47354
// Name: useKeyboardManager
// Dependencies: []
// Exports: default

// Module 5576 (useKeyboardManager)
let closure_0 = importAll(dependencyMap[0]);
({ Keyboard: closure_1, TextInput: closure_2 } = arg1(dependencyMap[1]));

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
    if (arg0()) {
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
    if (arg0()) {
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
    if (arg0()) {
      callback();
      const current = ref.current;
      const arg0 = current;
      if (current) {
        const _Date = Date;
        if (Date.now() - ref2.current < 100) {
          const _setTimeout = setTimeout;
          closure_3.current = setTimeout(() => {
            if (null != current) {
              current.focus();
            }
            closure_1.current = undefined;
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
  const effect = React.useEffect(() => () => callback(), items3);
  return { onPageChangeStart, onPageChangeConfirm, onPageChangeCancel };
};
