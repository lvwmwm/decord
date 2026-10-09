// Module ID: 16026
// Function ID: 16027
// Name: useBenchmarkResults
// Dependencies: [32, 19, 558, 576, 2]

// Module 16026 (useBenchmarkResults)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBenchmarkResults() {
  let closure_129_0;
  let first;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  [tmp4, closure_129_0] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  let closure_1 = react.useRef(0);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(label, elapsedMs) {
      label((arg0) => {
        elapsedMs.current = elapsedMs.current + 1;
        const items = [{ kind: "mount", id: elapsedMs.current, label, elapsedMs }, ...arg0];
        return items;
      });
    };
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k(arg0) {
      let ref;
      let closure_0 = arg0;
      closure_0((arg0) => {
        ref.current = ref.current + 1;
        const obj = { kind: "scroll", id: ref.current };
        const merged = Object.assign(closure_0);
        const items = [obj, ...arg0];
        return items;
      });
    };
    cResult[2] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h() {
      return closure_1_0([]);
    };
    cResult[3] = fn3;
    tmp7 = fn3;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const obj2 = { results: tmp4, addMount: tmp5, addScroll: tmp6, clear: tmp7 };
    cResult[4] = tmp4;
    cResult[5] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : (function useBenchmarkResults() {
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
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default tmp2;
