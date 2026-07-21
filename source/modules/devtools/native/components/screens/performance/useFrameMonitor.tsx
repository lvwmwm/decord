// Module ID: 14576
// Function ID: 109861
// Name: useFrameMonitor
// Dependencies: []
// Exports: default

// Module 14576 (useFrameMonitor)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default function useFrameMonitor(arg0) {
  const arg1 = arg0;
  const monitoring = callback(React.useState(false), 2);
  let closure_1 = monitoring[1];
  const callback = React.useRef(null);
  const React = React.useRef(arg0);
  const items = [arg0];
  const effect = React.useEffect(() => {
    closure_3.current = arg0;
  }, items);
  const start = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.stop();
    }
    ref.current = arg0(callback[2]).startFrameMonitor();
    callback(true);
  }, []);
  const stop = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      callback(false);
      ref2.current(current.stop());
      const stopResult = current.stop();
    }
  }, []);
  const effect1 = React.useEffect(() => () => {
    const current = ref.current;
    if (null != current) {
      current.stop();
    }
    ref.current = null;
  }, []);
  return { monitoring: monitoring[0], start, stop };
};
