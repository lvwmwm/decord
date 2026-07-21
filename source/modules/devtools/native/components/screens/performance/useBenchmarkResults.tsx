// Module ID: 14580
// Function ID: 109900
// Name: useBenchmarkResults
// Dependencies: []
// Exports: default

// Module 14580 (useBenchmarkResults)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default function useBenchmarkResults() {
  let tmp2;
  [tmp2, closure_0] = callback(React.useState([]), 2);
  const React = React.useRef(0);
  const tmp = callback(React.useState([]), 2);
  return {
    results: tmp2,
    addMount: React.useCallback((arg0, arg1) => {
      let closure_1 = arg1;
      arg0((arg0) => {
        arg1.current = +arg1.current + 1;
        const items = [{ kind: "mount", id: tmp, label: arg0, elapsedMs: arg1 }, ...arg0];
        return items;
      });
    }, []),
    addScroll: React.useCallback((arg0) => {
      arg0((arg0) => {
        ref.current = +ref.current + 1;
        const merged = Object.assign(arg0);
        const items = [{ kind: "scroll", id: tmp }, ...arg0];
        return items;
      });
    }, []),
    clear: React.useCallback(() => callback([]), [])
  };
};
