// Module ID: 12290
// Function ID: 12291
// Name: conjureTipClock
// Dependencies: [32, 19, 558, 576, 2]
// Exports: nextConjureTipClockDelay

// Module 12290 (conjureTipClock)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipClock(arg0, arg1) {
  let closure_0;
  let closure_3;
  let first;
  let first1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return Date.now();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = first1(react.useState(first), 2);
  first1 = tmp3[0];
  const obj2 = react;
  react = tmp3[1];
  if (cResult[1] === arg0) {
    if (cResult[2] === first1) {
      let tmp5;
      let tmp6;
      if (cResult[3] === arg1) {
        tmp5 = cResult[4];
        tmp6 = cResult[5];
      }
      const effect = obj2.useEffect(tmp5, tmp6);
      return first1;
    }
  }
  const fn2 = function s() {
    let timeout;
    if (null != timeout) {
      const _Date = Date;
      const timestamp = Date.now();
      timeout = tmp2;
      closure_1 = first1;
      const mapped = closure_1.map((item) => closure_0 + item);
      let num2 = 0;
      if (!mapped.some((item) => item > closure_1 && item <= timestamp)) {
        const found = mapped.filter((item) => item > timestamp);
        let diff = null;
        if (found.length > 0) {
          const _Math = Math;
          const items = [];
          HermesBuiltin.arraySpread(items, found, 0);
          const _Math2 = Math;
          diff = HermesBuiltin.apply(min, items, Math) - timestamp;
        }
        num2 = diff;
      }
      if (null != num2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_3(Date.now()), num2);
        return () => clearTimeout(closure_0);
      }
    }
  };
  let items = [arg0, arg1, first1];
  cResult[1] = arg0;
  cResult[2] = first1;
  cResult[3] = arg1;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : (function useConjureTipClock(arg0, arg1) {
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const tmp = first(react.useState(() => Date.now()), 2);
  first = tmp[0];
  react = tmp[1];
  let items = [arg0, arg1, first];
  const effect = react.useEffect(() => {
    let timeout;
    if (null != timeout) {
      const _Date = Date;
      const timestamp = Date.now();
      timeout = tmp2;
      closure_1 = first;
      const mapped = closure_1.map((item) => closure_0 + item);
      let num2 = 0;
      if (!mapped.some((item) => item > closure_1 && item <= timestamp)) {
        const found = mapped.filter((item) => item > timestamp);
        let diff = null;
        if (found.length > 0) {
          const _Math = Math;
          const items = [];
          HermesBuiltin.arraySpread(items, found, 0);
          const _Math2 = Math;
          diff = HermesBuiltin.apply(min, items, Math) - timestamp;
        }
        num2 = diff;
      }
      if (null != num2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_3(Date.now()), num2);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  return first;
});
function nextConjureTipClockDelay(arg0, arr, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  let closure_2 = arg3;
  const mapped = arr.map((item) => closure_0 + item);
  if (mapped.some((item) => item > closure_1 && item <= timestamp)) {
    return 0;
  } else {
    const found = mapped.filter((item) => item > timestamp);
    let diff = null;
    if (found.length > 0) {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(items, found, 0);
      const _Math2 = Math;
      diff = HermesBuiltin.apply(min, items, Math) - arg3;
    }
    return diff;
  }
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureTipClock.tsx");

export { nextConjureTipClockDelay };
export const useConjureTipClock = tmp2;
