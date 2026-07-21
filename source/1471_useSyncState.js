// Module ID: 1471
// Function ID: 17114
// Name: useSyncState
// Dependencies: []
// Exports: default

// Module 1471 (useSyncState)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
let closure_2 = {};

export default function useSyncState(arg0) {
  const ref = React.useRef(closure_2);
  let callback = ref;
  const React = React.useRef(false);
  closure_2 = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_2.current = false;
    };
  }, []);
  if (ref.current === closure_2) {
    let tmp3 = arg0;
    if ("function" === typeof arg0) {
      tmp3 = arg0();
    }
    ref.current = tmp3;
  }
  const tmp4 = callback(React.useState(ref.current), 2);
  const tmp5 = tmp4[1];
  callback = React.useCallback(() => ref.current, []);
  const callback1 = React.useCallback((current) => {
    current = current !== ref.current;
    if (current) {
      current = ref2.current;
    }
    if (current) {
      ref.current = current;
      if (!ref.current) {
        const tmp5 = tmp5(current);
      }
    }
  }, []);
  const callback2 = React.useCallback((arg0) => {
    closure_1.current = true;
    arg0();
    closure_1.current = false;
  }, []);
  const callback3 = React.useCallback(() => {
    if (ref2.current) {
      tmp5(ref.current);
    }
  }, []);
  if (tmp4[0] !== ref.current) {
    tmp5(ref.current);
  }
  const current = ref.current;
  const debugValue = React.useDebugValue(current);
  const items = [current, callback, callback1, callback2, callback3];
  return items;
};
