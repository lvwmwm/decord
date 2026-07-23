// Module ID: 14703
// Function ID: 112107
// Name: useBenchmarkResults
// Dependencies: [57, 31, 2]
// Exports: default

// Module 14703 (useBenchmarkResults)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default function useBenchmarkResults() {
  let _slicedToArray;
  let tmp2;
  [tmp2, _slicedToArray] = callback(React.useState([]), 2);
  React = React.useRef(0);
  const tmp = callback(React.useState([]), 2);
  return {
    results: tmp2,
    addMount: React.useCallback((arg0, arg1) => {
      const callback = arg0;
      let result = arg1;
      callback((arg0) => {
        ref.current = +ref.current + 1;
        const items = [{ kind: "mount", id: tmp, label: _slicedToArray, elapsedMs: ref }, ...arg0];
        return items;
      });
    }, []),
    addScroll: React.useCallback((arg0) => {
      const callback = arg0;
      callback((arg0) => {
        outer1_1.current = +outer1_1.current + 1;
        const merged = Object.assign(_slicedToArray);
        const items = [{ kind: "scroll", id: tmp }, ...arg0];
        return items;
      });
    }, []),
    clear: React.useCallback(() => callback([]), [])
  };
};
