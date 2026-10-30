// Module ID: 12578
// Function ID: 12579
// Name: conjureTipClock
// Dependencies: [32, 19, 2]
// Exports: nextConjureTipClockDelay, useConjureTipClock

// Module 12578 (conjureTipClock)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = size.fileFinishedImporting("modules/conjure/tips/conjureTipClock.tsx");

export function nextConjureTipClockDelay(arg0, arr, arg2, arg3) {
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
export function useConjureTipClock(entryActivityAtResult, arg1) {
  let closure_3;
  let first;
  _slicedToArray = entryActivityAtResult;
  react = arg1;
  [first, closure_3] = react.useState(() => Date.now());
  let items = [entryActivityAtResult, arg1, first];
  const effect = react.useEffect(() => {
    let closure_0;
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
}
