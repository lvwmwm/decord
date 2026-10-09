// Module ID: 6211
// Function ID: 6212
// Name: useNavigatorBackPressHandler
// Dependencies: [19, 558, 576, 5371, 1504, 2]

// Module 6211 (useNavigatorBackPressHandler)
import useBackPressHandler from "useBackPressHandler" /* 5371 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigatorBackPressHandler(cResult) {
  let closure_1;
  let current;
  let tmp4;
  let tmp6;
  _require = cResult;
  let obj = require("react");
  cResult = obj.c(3);
  dependencyMap = react.useRef(cResult);
  const obj2 = react;
  const tmp = _require;
  if (cResult[0] !== cResult) {
    const fn = function t() {
      closure_1.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      let ref;
      const obj = useBackPressHandler;
      return obj.subscribeToBackPress(() => ref.current());
    };
    cResult[2] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(1504);
  const focusEffect = tmpResult.useFocusEffect(tmp6);
}) : (function useNavigatorBackPressHandler(cResult) {
  let closure_1;
  let current;
  _require = cResult;
  dependencyMap = react.useRef(cResult);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_1.current = current;
  });
  let obj = require("Link");
  const focusEffect = obj.useFocusEffect(react.useCallback(() => {
    let ref;
    const obj = useBackPressHandler;
    return obj.subscribeToBackPress(() => ref.current());
  }, []));
});
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = tmp2;
