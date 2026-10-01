// Module ID: 15336
// Function ID: 15337
// Name: useBenchmarkResults
// Dependencies: [32, 19, 2]
// Exports: default

// Module 15336 (useBenchmarkResults)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default function useBenchmarkResults() {
  let closure_0;
  let first;
  [first, closure_0] = react.useState([]);
  let closure_1 = react.useRef(0);
  let obj = {
    results: first,
    addMount: react.useCallback((label, elapsedMs) => {
      label((arg0) => {
        const obj = { kind: "mount", id: +elapsedMs.current, label, elapsedMs };
        elapsedMs.current = +elapsedMs.current + 1;
        const items = [obj, ...arg0];
        return items;
      });
    }, []),
    addScroll: react.useCallback((arg0) => {
      let ref;
      closure_0 = arg0;
      closure_0((arg0) => {
        const obj = { kind: "scroll", id: +ref.current };
        ref.current = +ref.current + 1;
        const merged = Object.assign(closure_0);
        const items = [obj, ...arg0];
        return items;
      });
    }, []),
    clear: react.useCallback(() => closure_0([]), [])
  };
  return obj;
};
