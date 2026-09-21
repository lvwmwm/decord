// Module ID: 7206
// Function ID: 7207
// Name: hooks/useStableCallback
// Dependencies: [19, 558, 568, 2]

// Module 7206 (hooks/useStableCallback)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((cResult) => {
  const current = cResult;
  cResult = c.c(3);
  noop.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function c() {
      closure_1.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const insertionEffect = noop.useInsertionEffect(tmp2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      const items = [...HermesBuiltin.copyRestArgs()];
      return ref.current.apply(items);
    };
    cResult[2] = fn2;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
  }
  return tmp4;
}) : ((cResult) => {
  const current = cResult;
  noop.useRef(cResult);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_1.current = current;
  });
  return noop.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
});
