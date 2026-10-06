// Module ID: 14268
// Function ID: 14269
// Name: useDismissOnce
// Dependencies: [19, 2048, 558, 576, 2]

// Module 14268 (useDismissOnce)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, cResult, dependencyMap;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((cResult) => {
  let current;
  let ref;
  let ref2;
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp7;
  _require = cResult;
  const obj = require("react");
  cResult = obj.c(6);
  dependencyMap = react.useRef(false);
  react = react.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function s() {
      ref2.current = current;
    };
    const items = [cResult];
    cResult[0] = cResult;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = obj2.useEffect(tmp2, tmp3);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f(AUTO_DISMISS) {
      if (!ref.current) {
        tmp.current = true;
        ref2.current(AUTO_DISMISS);
      }
    };
    cResult[3] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  let closure_3 = tmp5;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return () => closure_1_3(closure_3.AUTO_DISMISS);
      }
    }
    const items1 = [tmp5];
    cResult[4] = S;
    cResult[5] = items1;
    tmp7 = items1;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return () => closure_1_3(closure_3.AUTO_DISMISS);
      }
    }
    tmp7 = cResult[5];
  }
  const effect1 = obj2.useEffect(tmp6, tmp7);
  return tmp5;
}) : ((cResult) => {
  let ref2;
  const current = cResult;
  const ref = react.useRef(false);
  react = react.useRef(cResult);
  const items = [cResult];
  const effect = react.useEffect(() => {
    ref2.current = current;
  }, items);
  const callback = react.useCallback((AUTO_DISMISS) => {
    if (!ref.current) {
      tmp.current = true;
      ref2.current(AUTO_DISMISS);
    }
  }, []);
  const items1 = [callback];
  const effect1 = react.useEffect(() => () => closure_1_3(callback.AUTO_DISMISS), items1);
  return callback;
});
const result = size.fileFinishedImporting("modules/tiny_bronco/native/useDismissOnce.tsx");

export const useDismissOnce = tmp2;
