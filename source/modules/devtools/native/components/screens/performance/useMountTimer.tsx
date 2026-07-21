// Module ID: 14578
// Function ID: 109888
// Name: useMountTimer
// Dependencies: []
// Exports: default

// Module 14578 (useMountTimer)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/devtools/native/components/screens/performance/useMountTimer.tsx");

export default function useMountTimer() {
  let tmp2;
  [tmp2, closure_0] = callback(React.useState(null), 2);
  const React = React.useRef(0);
  let closure_2 = React.useRef(0);
  let closure_3 = React.useRef(null);
  const tmp = callback(React.useState(null), 2);
  return {
    run: tmp2,
    begin: React.useCallback((params) => {
      const sum = ref.current + 1;
      ref.current = sum;
      closure_3.current = sum;
      closure_2.current = performance.now();
      callback({ batchKey: sum, params });
    }, []),
    measure: React.useCallback((arg0) => {
      let diff = null;
      if (arg0 === ref3.current) {
        ref3.current = null;
        const _performance = performance;
        diff = performance.now() - ref2.current;
      }
      return diff;
    }, []),
    cancel: React.useCallback((arg0) => {
      if (arg0 === ref3.current) {
        ref3.current = null;
      }
    }, [])
  };
};
