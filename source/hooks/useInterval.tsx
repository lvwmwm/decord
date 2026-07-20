// Module ID: 6673
// Function ID: 51338
// Name: useInterval
// Dependencies: [57, 5, 6]
// Exports: default

// Module 6673 (useInterval)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";

({ useEffect: closure_2, useRef: closure_3 } = _slicedToArray);
const result = _classCallCheck.fileFinishedImporting("hooks/useInterval.tsx");

export default function useInterval(arg0, arg1) {
  const importDefault = arg0;
  const dependencyMap = arg1;
  const callback = callback2(arg0);
  const callback2 = callback2(null);
  const items = [arg0];
  callback(() => {
    closure_2.current = arg0;
  }, items);
  const items1 = [arg1];
  callback(() => {
    if (null !== arg1) {
      const _setInterval = setInterval;
      ref.current = setInterval(() => {
        callback(closure_1[1])(null != ref.current, "Missing callback");
        ref.current();
      }, arg1);
      return () => clearInterval(ref2.current);
    } else if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }, items1);
};
