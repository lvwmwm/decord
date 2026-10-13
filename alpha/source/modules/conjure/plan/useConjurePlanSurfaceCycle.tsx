// Module ID: 11919
// Function ID: 11920
// Name: useConjurePlanSurfaceCycle
// Dependencies: [32, 19, 5081, 558, 576, 504, 2]

// Module 11919 (useConjurePlanSurfaceCycle)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, num;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanSurfaceCycle(arg0, arg1) {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_3;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(9);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmp7 = arg1;
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  dependencyMap = _slicedToArray(react.useState(0), 2)[1];
  _slicedToArray(react.useState(0), 2);
  const tmp10 = _slicedToArray(react.useState(false), 2);
  _slicedToArray = tmp10[1];
  const obj3 = react;
  if (arg1) {
    tmp7 = !tmp10[0];
  }
  if (tmp7) {
    tmp7 = !stateFromStores;
  }
  if (tmp7) {
    tmp7 = arg0 > 1;
  }
  react = tmp7;
  if (cResult[2] === arg0) {
    let tmp11;
    let tmp12;
    let tmp14;
    let tmp15;
    if (cResult[3] === tmp7) {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    const effect = obj3.useEffect(tmp11, tmp12);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          closure_2(true);
          closure_1(arg0);
        }
      }
      cResult[6] = C;
      tmp14 = C;
    } else {
      class C {
        constructor(arg0) {
          closure_2(true);
          closure_1(arg0);
        }
      }
    }
    if (0 !== arg0) {
      class C {
        constructor(arg0) {
          closure_2(true);
          closure_1(arg0);
        }
      }
    }
    if (cResult[7] !== 0) {
      class C {
        constructor(arg0) {
          closure_2(true);
          closure_1(arg0);
        }
      }
      tmp16[0] = 0;
      tmp16[1] = tmp14;
      cResult[7] = 0;
      cResult[8] = tmp16;
      tmp15 = tmp16;
    } else {
      class C {
        constructor(arg0) {
          closure_2(true);
          closure_1(arg0);
        }
      }
    }
    return tmp15;
  }
  class S {
    constructor() {
      if (closure_3) {
        tmp = globalThis;
        _setInterval = setInterval;
        num = 2500;
        closure_0 = setInterval(() => closure_1_1(() => { /* body not rendered: F155443 */ }), 2500);
        return () => clearInterval(closure_0);
      } else {
        return;
      }
    }
  }
  const items1 = [tmp7, arg0];
  cResult[2] = arg0;
  cResult[3] = tmp7;
  cResult[4] = S;
  cResult[5] = items1;
  tmp12 = items1;
  tmp11 = S;
}) : (function useConjurePlanSurfaceCycle(arg0, arg1) {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_3;
  let first;
  let useReducedMotion;
  _require = arg0;
  let tmp = arg1;
  const items = [AccessibilityStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [first, dependencyMap] = react.useState(0);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  _slicedToArray = tmp5[1];
  if (arg1) {
    tmp = !tmp5[0];
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  if (tmp) {
    tmp = arg0 > 1;
  }
  react = tmp;
  const items1 = [tmp, arg0];
  const effect = obj2.useEffect(() => {
    if (closure_3) {
      const _setInterval = setInterval;
      const interval = setInterval(() => closure_1_1((arg0) => (arg0 + 1) % closure_1_0), 2500);
      return () => clearInterval(closure_0);
    }
  }, items1);
  let selectedIndex = 0;
  const select = obj2.useCallback((arg0) => {
    closure_2(true);
    closure_1(arg0);
  }, []);
  if (0 !== arg0) {
    selectedIndex = first % arg0;
  }
  return { selectedIndex, select };
});
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanSurfaceCycle.tsx");

export const useConjurePlanSurfaceCycle = tmp2;
