// Module ID: 6646
// Function ID: 6647
// Name: hooks/useStableCallback
// Dependencies: [19, 558, 576, 2]

// Module 6646 (hooks/useStableCallback)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStableCallback(cResult) {
  let tmp2;
  let tmp4;
  let closure_0 = cResult;
  const obj = react2;
  cResult = obj.c(3);
  let closure_1 = react.useRef(cResult);
  const obj2 = react;
  if (cResult[0] !== cResult) {
    const fn = function c() {
      ref.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const insertionEffect = obj2.useInsertionEffect(tmp2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      const items = [...HermesBuiltin.copyRestArgs()];
      return ref.current.apply(items);
    };
    cResult[2] = fn2;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
  }
  return tmp4;
}) : (function useStableCallback(cResult) {
  let closure_0 = cResult;
  let closure_1 = react.useRef(cResult);
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = current;
  });
  return react.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
});
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default tmp2;
