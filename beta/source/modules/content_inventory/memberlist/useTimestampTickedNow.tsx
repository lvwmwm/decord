// Module ID: 13338
// Function ID: 13339
// Name: useTimestampTickedNow
// Dependencies: [32, 19, 4782, 1095, 558, 568, 504, 2040, 2]

// Module 13338 (useTimestampTickedNow)
import c from "c" /* 568 */;
import DurationsDefault from "Durations" /* 1095 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

const require = globalThis.__r;

const initialize = tmp(504);
require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const isAppFocused = tmp4.isAppFocused;
  let tmp5 = undefined === isAppFocused;
  if (!tmp5) {
    tmp5 = isAppFocused;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / result(1095).Millis.SECOND);
      return rounded * result(1095).Millis.SECOND;
    };
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj3 = noop;
  [tmp8, require] = noop.useState(tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn2 = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = fn2;
    let tmp10 = fn2;
    let tmp9 = items;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmp7 = _slicedToArray(noop.useState(tmp6), 2);
  let stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
  let tmp13 = !tmp5;
  if (tmp5) {
    if (stateFromStores) {
      stateFromStores = !tmp4.hovered;
    }
    tmp13 = stateFromStores;
  }
  const SECOND = DurationsDefault.Millis.SECOND;
  if (tmp13) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  if (cResult[5] !== result) {
    class C {
      constructor() {
        interval = new closure_0(closure_1_2[7]).Interval();
        closure_0 = interval;
        startResult = interval.start(SECOND, () => {
          const timestamp = Date.now();
          const rounded = Math.floor(timestamp / result(1095).Millis.SECOND);
          interval(rounded * result(1095).Millis.SECOND);
        });
        return () => interval.stop();
      }
    }
    const items1 = [result];
    cResult[5] = result;
    cResult[6] = C;
    cResult[7] = items1;
    let tmp16 = items1;
    const tmp15 = C;
  } else {
    class C {
      constructor() {
        interval = new closure_0(closure_1_2[7]).Interval();
        closure_0 = interval;
        startResult = interval.start(SECOND, () => {
          const timestamp = Date.now();
          const rounded = Math.floor(timestamp / result(1095).Millis.SECOND);
          interval(rounded * result(1095).Millis.SECOND);
        });
        return () => interval.stop();
      }
    }
    tmp16 = cResult[7];
  }
  const effect = obj3.useEffect(tmp15, tmp16);
  if (cResult[8] === tmp8) {
    class C {
      constructor() {
        interval = new closure_0(closure_1_2[7]).Interval();
        closure_0 = interval;
        startResult = interval.start(SECOND, () => {
          const timestamp = Date.now();
          const rounded = Math.floor(timestamp / result(1095).Millis.SECOND);
          interval(rounded * result(1095).Millis.SECOND);
        });
        return () => interval.stop();
      }
    }
    return obj4;
  }
  obj4 = { now: tmp8, slowTickMode: tmp13 };
  cResult[8] = tmp8;
  cResult[9] = tmp13;
  cResult[10] = obj4;
}) : (() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  importDefault = undefined;
  const now = _slicedToArray(noop.useState(() => {
    const timestamp = Date.now();
    const rounded = Math.floor(timestamp / _undefined(1095).Millis.SECOND);
    return rounded * _undefined(1095).Millis.SECOND;
  }), 2);
  _require = now[1];
  const items = [AccessibilityStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let slowTickMode = !isAppFocused;
  if (isAppFocused) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    slowTickMode = stateFromStores;
  }
  const SECOND = DurationsDefault.Millis.SECOND;
  if (slowTickMode) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = noop.useEffect(() => {
    const interval = new closure_0(2040).Interval();
    interval.start(c1, () => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / c1(1095).Millis.SECOND);
      interval(rounded * c1(1095).Millis.SECOND);
    });
    return () => interval.stop();
  }, items1);
  return { now: now[0], slowTickMode };
});
