// Module ID: 5845
// Function ID: 5846
// Name: useNavigatorBackPressHandler
// Dependencies: [19, 558, 568, 5183, 1489, 2]

// Module 5845 (useNavigatorBackPressHandler)
import useBackPressHandler from "useBackPressHandler" /* 5183 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = ReactCompilerGating.isReactCompilerEnabled() ? ((cResult) => {
  _require = cResult;
  cResult = require("c").c(3);
  dependencyMap = noop.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function t() {
      closure_1.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const layoutEffect = noop.useLayoutEffect(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      return useBackPressHandler.subscribeToBackPress(() => ref.current());
    };
    cResult[2] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const focusEffect = require("Link").useFocusEffect(tmp6);
}) : ((cResult) => {
  _require = cResult;
  dependencyMap = noop.useRef(cResult);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_1.current = current;
  });
  const focusEffect = require("Link").useFocusEffect(noop.useCallback(() => useBackPressHandler.subscribeToBackPress(() => ref.current()), []));
});
