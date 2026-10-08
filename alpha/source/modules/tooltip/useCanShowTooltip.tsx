// Module ID: 10825
// Function ID: 10826
// Name: useCanShowTooltip
// Dependencies: [19, 10826, 558, 576, 504, 9694, 2]

// Module 10825 (useCanShowTooltip)
import TooltipActionCreatorsDefault from "TooltipActionCreators" /* 9694 */;
import react from "react" /* 19 */;
import TooltipStore from "TooltipStore" /* 10826 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanShowTooltip(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  let closure_1 = tmp4;
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [TooltipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined === arg2 || arg2)) {
    tmp(504);
    if (cResult[4] === (undefined === arg2 || arg2)) {
      if (cResult[5] === (undefined !== arg1 && arg1)) {
        let tmp11;
        let tmp12;
        if (cResult[6] === arg0) {
          tmp11 = cResult[7];
          tmp12 = cResult[8];
        }
        const effect = react.useEffect(tmp11, tmp12);
        return tmp10;
      }
    }
    const fn2 = function h() {
      const tmp = closure_2;
      if (tmp) {
        const obj = TooltipActionCreatorsDefault;
        obj.attemptToShowTooltip(closure_0, closure_1);
      }
    };
    const items1 = [tmp5, tmp4, arg0];
    cResult[4] = undefined === arg2 || arg2;
    cResult[5] = undefined !== arg1 && arg1;
    cResult[6] = arg0;
    cResult[7] = fn2;
    cResult[8] = items1;
    tmp12 = items1;
    tmp11 = fn2;
  }
  const fn = function c() {
    const tmp = TooltipStore.canShowTooltip(closure_0) && closure_2;
    return tmp;
  };
  cResult[1] = undefined === arg2 || arg2;
  cResult[2] = arg0;
  cResult[3] = fn;
}) : (function useCanShowTooltip(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let obj = require("get initialized");
  const items = [TooltipStore];
  const items1 = [flag2, flag, arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = TooltipStore.canShowTooltip(closure_0) && flag2;
    return tmp;
  });
  const effect = react.useEffect(() => {
    const tmp = flag2;
    if (tmp) {
      const obj = TooltipActionCreatorsDefault;
      obj.attemptToShowTooltip(closure_0, flag);
    }
  }, items1);
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/tooltip/useCanShowTooltip.tsx");

export const useCanShowTooltip = tmp2;
