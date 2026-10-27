// Module ID: 12440
// Function ID: 12441
// Name: useConjurePlanOverlaySlides
// Dependencies: [32, 19, 4973, 3831, 558, 576, 504, 1125, 2]

// Module 12440 (useConjurePlanOverlaySlides)
import _modDef3831 from "module_3831" /* 3831 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, dependencyMap;

let items = [_modDef3831["3eTjcV"], _modDef3831.l3j5nS];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanOverlaySlides(arg0) {
  let closure_0;
  let num3;
  let paused;
  let ready;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(12);
  ({ ready, paused } = arg0);
  const tmp = _require;
  const tmp4 = undefined !== paused && paused;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [closure_4];
    const fn = function c() {
      return closure_4.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = ready(num3.useState(0), 2);
  _require = tmp9[1];
  const first = tmp9[0];
  [tmp12, dependencyMap] = ready(num3.useState(false), 2);
  ready(num3.useState(false), 2);
  const obj3 = num3;
  if (ready) {
    ready = !stateFromStores;
  }
  if (ready) {
    ready = !tmp4;
  }
  if (ready) {
    ready = !tmp12;
  }
  if (!stateFromStores) {
    num3 = first;
  } else {
    num3 = 0;
  }
  if (cResult[2] !== ready) {
    const fn2 = function y() {
      if (ready) {
        const _setInterval = setInterval;
        const interval = setInterval(() => {
          let length;
          return closure_0((arg0) => (arg0 + 1) % length.length);
        }, 4000);
        return () => clearInterval(closure_0);
      }
    };
    const items1 = [ready];
    cResult[2] = ready;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp14 = items1;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
    tmp14 = cResult[4];
  }
  const effect = obj3.useEffect(tmp13, tmp14);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function b(arg0) {
      dependencyMap(true);
      closure_0(arg0);
    };
    cResult[5] = fn3;
    tmp16 = fn3;
  } else {
    tmp16 = cResult[5];
  }
  closure_4 = tmp16;
  if (cResult[6] !== num3) {
    const fn4 = function x() {
      return closure_4(num3);
    };
    cResult[6] = num3;
    cResult[7] = fn4;
    tmp17 = fn4;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const mapped = items.map((item) => {
      const intl = closure_0(dependencyMap[7]).intl;
      return intl.string(item);
    });
    cResult[8] = mapped;
    tmp18 = mapped;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === tmp17) {
    let tmp21;
    if (cResult[10] === num3) {
      tmp21 = cResult[11];
    }
    return tmp21;
  }
  const obj2 = { slide: num3, labels: tmp18, pick: tmp16, hold: tmp17 };
  cResult[9] = tmp17;
  cResult[10] = num3;
  cResult[11] = obj2;
  tmp21 = obj2;
}) : (function useConjurePlanOverlaySlides(arg0) {
  let _undefined;
  let c1;
  let callback1;
  let closure_0;
  let paused;
  let ready;
  let tmp5;
  ({ ready, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  dependencyMap = undefined;
  ready = undefined;
  let num;
  let pick;
  items = [pick];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => callback.useReducedMotion);
  const tmp2 = ready(num.useState(0), 2);
  _require = tmp2[1];
  const first = tmp2[0];
  [tmp5, c1] = ready(num.useState(false), 2);
  ready(num.useState(false), 2);
  if (ready) {
    ready = !stateFromStores;
  }
  if (ready) {
    ready = !paused;
  }
  if (ready) {
    ready = !tmp5;
  }
  if (!stateFromStores) {
    num = first;
  } else {
    num = 0;
  }
  const items1 = [ready];
  const effect = obj2.useEffect(() => {
    if (ready) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        let length;
        return closure_0((arg0) => (arg0 + 1) % length.length);
      }, 4000);
      return () => clearInterval(closure_0);
    }
  }, items1);
  pick = obj2.useCallback((arg0) => {
    c1(true);
    closure_0(arg0);
  }, []);
  const items2 = [pick, num];
  const obj3 = {
    slide: num,
    labels: items.map((item) => {
      const intl = closure_0(c1[7]).intl;
      return intl.string(item);
    }),
    pick,
    hold: callback1
  };
  callback1 = obj2.useCallback(() => callback(num), items2);
  return obj3;
});
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanOverlaySlides.tsx");

export const useConjurePlanOverlaySlides = tmp2;
