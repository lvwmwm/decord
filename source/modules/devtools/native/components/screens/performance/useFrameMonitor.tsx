// Module ID: 14749
// Function ID: 112421
// Name: useFrameMonitor
// Dependencies: [57, 31, 14747, 2]
// Exports: default

// Module 14749 (useFrameMonitor)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("FRAME_BUDGET_MS").fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default function useFrameMonitor(arg0) {
  let closure_0 = arg0;
  const monitoring = callback(React.useState(false), 2);
  let closure_1 = monitoring[1];
  callback = React.useRef(null);
  React = React.useRef(arg0);
  const items = [arg0];
  const effect = React.useEffect(() => {
    result.current = closure_0;
  }, items);
  const start = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.stop();
    }
    ref.current = callback(14747).startFrameMonitor();
    dependencyMap(true);
  }, []);
  const stop = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      dependencyMap(false);
      ref2.current(current.stop());
      const stopResult = current.stop();
    }
  }, []);
  const effect1 = React.useEffect(() => () => {
    const current = outer1_2.current;
    if (null != current) {
      current.stop();
    }
    outer1_2.current = null;
  }, []);
  return { monitoring: monitoring[0], start, stop };
};
