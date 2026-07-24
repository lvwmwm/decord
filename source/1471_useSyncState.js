// Module ID: 1471
// Function ID: 17116
// Name: useSyncState
// Dependencies: [57, 31]
// Exports: default

// Module 1471 (useSyncState)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_2 = {};

export default function useSyncState(arg0) {
  const ref = React.useRef(closure_2);
  React = React.useRef(false);
  closure_2 = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_2.current = true;
    return () => {
      outer1_2.current = false;
    };
  }, []);
  if (ref.current === closure_2) {
    let tmp3 = arg0;
    if ("function" === typeof arg0) {
      tmp3 = arg0();
    }
    ref.current = tmp3;
  }
  const tmp4 = ref(React.useState(ref.current), 2);
  let closure_3 = tmp5;
  const callback = React.useCallback(() => ref.current, []);
  const callback1 = React.useCallback((current) => {
    current = current !== ref.current;
    if (current) {
      current = ref2.current;
    }
    if (current) {
      ref.current = current;
      if (!ref.current) {
        tmp5 = tmp5(current);
      }
    }
  }, []);
  const callback2 = React.useCallback((arg0) => {
    result.current = true;
    arg0();
    result.current = false;
  }, []);
  const callback3 = React.useCallback(() => {
    if (ref2.current) {
      tmp5(ref.current);
    }
  }, []);
  if (tmp4[0] !== ref.current) {
    tmp5(ref.current);
  }
  let current = ref.current;
  const debugValue = React.useDebugValue(current);
  const items = [current, callback, callback1, callback2, callback3];
  return items;
};
