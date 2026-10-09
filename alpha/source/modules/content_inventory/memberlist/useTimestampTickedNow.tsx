// Module ID: 13079
// Function ID: 13080
// Name: useTimestampTickedNow
// Dependencies: [32, 19, 5080, 1102, 558, 576, 504, 2059, 2]

// Module 13079 (useTimestampTickedNow)
import react2 from "react" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTimestampTickedNow(arg0) {
  let require;
  let result;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const isAppFocused = tmp4.isAppFocused;
  let tmp5 = undefined === isAppFocused;
  const hovered = tmp4.hovered;
  if (!tmp5) {
    tmp5 = isAppFocused;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / DurationsDefault.Millis.SECOND);
      return rounded * DurationsDefault.Millis.SECOND;
    };
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  [tmp8, require] = react.useState(tmp6);
  _slicedToArray(react.useState(tmp6), 2);
  const obj3 = react;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn2 = function f() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = fn2;
    tmp10 = fn2;
    tmp9 = items;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = get_initialized;
  let stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  let tmp13 = !tmp5;
  if (tmp5) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    tmp13 = stateFromStores;
  }
  const SECOND = DurationsDefault.Millis.SECOND;
  if (tmp13) {
    result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  if (cResult[5] !== result) {
    const fn3 = function _() {
      const interval = new require("Timers").Interval();
      interval.start(closure_1, () => {
        const timestamp = Date.now();
        const rounded = Math.floor(timestamp / DurationsDefault.Millis.SECOND);
        interval(rounded * DurationsDefault.Millis.SECOND);
      });
      return () => interval.stop();
    };
    const items1 = [result];
    cResult[5] = result;
    cResult[6] = fn3;
    cResult[7] = items1;
    tmp16 = items1;
    tmp15 = fn3;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const effect = obj3.useEffect(tmp15, tmp16);
  if (cResult[8] === tmp8) {
    let tmp18;
    if (cResult[9] === tmp13) {
      tmp18 = cResult[10];
    }
    return tmp18;
  }
  const obj4 = { now: tmp8, slowTickMode: tmp13 };
  cResult[8] = tmp8;
  cResult[9] = tmp13;
  cResult[10] = obj4;
  tmp18 = obj4;
}) : (function useTimestampTickedNow() {
  let _undefined;
  let closure_0;
  let hovered;
  let isAppFocused;
  let now;
  let result;
  let useReducedMotion;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  _require = undefined;
  importDefault = undefined;
  [now, _require] = react.useState(() => {
    const timestamp = Date.now();
    const rounded = Math.floor(timestamp / _undefined(dependencyMap[3]).Millis.SECOND);
    return rounded * _undefined(dependencyMap[3]).Millis.SECOND;
  });
  const items = [AccessibilityStore];
  const obj3 = require("get initialized");
  let stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let slowTickMode = !isAppFocused;
  const obj2 = react;
  if (isAppFocused) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    slowTickMode = stateFromStores;
  }
  const SECOND = DurationsDefault.Millis.SECOND;
  if (slowTickMode) {
    result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = obj2.useEffect(() => {
    const interval = new closure_0(dependencyMap[7]).Interval();
    interval.start(c1, () => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / c1(dependencyMap[3]).Millis.SECOND);
      interval(rounded * c1(dependencyMap[3]).Millis.SECOND);
    });
    return () => interval.stop();
  }, items1);
  return { now, slowTickMode };
});
let result = size.fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = tmp2;
