// Module ID: 15335
// Function ID: 15336
// Name: useFrameMonitor
// Dependencies: [32, 19, 15333, 2]
// Exports: default

// Module 15335 (useFrameMonitor)
import startFrameMonitor from "startFrameMonitor" /* 15333 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default function useFrameMonitor(set) {
  let closure_1;
  let monitoring;
  let ref;
  let ref2;
  let current = set;
  [monitoring, closure_1] = react.useState(false);
  _slicedToArray = react.useRef(null);
  react = react.useRef(set);
  const items = [set];
  const effect = react.useEffect(() => {
    ref2.current = current;
  }, items);
  const start = react.useCallback(() => {
    current = ref.current;
    const tmp = ref;
    if (current != null) {
      current.stop();
    }
    const obj = startFrameMonitor;
    tmp.current = obj.startFrameMonitor();
    closure_1(true);
  }, []);
  const stop = react.useCallback(() => {
    current = ref.current;
    if (null != current) {
      ref.current = null;
      const stopResult = current.stop();
      closure_1(false);
      ref2.current(stopResult);
    }
  }, []);
  const effect1 = react.useEffect(() => () => {
    current = ref.current;
    const tmp = ref;
    if (current != null) {
      current.stop();
    }
    tmp.current = null;
  }, []);
  return { monitoring, start, stop };
};
