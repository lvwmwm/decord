// Module ID: 8375
// Function ID: 8376
// Name: useGetIsMounted
// Dependencies: [19, 558, 576, 2]

// Module 8375 (useGetIsMounted)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetIsMounted() {
  let tmp2;
  let tmp3;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  let closure_0 = react.useRef(true);
  const obj2 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return () => {
        ref.current = false;
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = obj2.useEffect(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      return ref.current;
    };
    cResult[2] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (function useGetIsMounted() {
  let closure_0 = react.useRef(true);
  const effect = react.useEffect(() => () => {
    ref.current = false;
  }, []);
  return react.useCallback(() => ref.current, []);
});
const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default tmp2;
